import { faker } from '@faker-js/faker';
import type { Case } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Pagination', () => {
  const projectId = faker.datatype.number();
  const testCase: Case = jsonFor('Case');
  const testCases = Array(1000)
    .fill(null)
    .map((_, id) => ({ ...testCase, id }));

  describe('Common', async () => {
    it('no paginate: "limit" passed', async () => {
      const limit = faker.datatype.number();

      on(`get_cases/${projectId}&limit=${limit}`)
        .reply(OK);

      await api.getCases(projectId, { limit });
    });

    it('no paginate: "offset" passed', async () => {
      const offset = faker.datatype.number();

      on(`get_cases/${projectId}&offset=${offset}`)
        .reply(OK);

      await api.getCases(projectId, { offset });
    });
  });

  describe('TestRail < 6.7', async () => {
    it('no paginate: <250 items', async () => {
      const cases = testCases.slice(0, 249);

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, cases);

      await api
        .getCases(projectId)
        .should.eventually.be.deep.equal(cases);
    });

    it('no paginate: >250 items', async () => {
      const cases = testCases.slice(0, 500);

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, cases);

      await api.getCases(projectId)
        .should.eventually.be.deep.equal(cases);
    });

    it('no paginate: same items', async () => {
      const response = testCases.slice(0, 250);

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, response);

      on(`get_cases/${projectId}&limit=250&offset=250`)
        .reply(OK, response);

      await api
        .getCases(projectId)
        .should.eventually.be.deep.equal(response);
    });

    it('paginate: partial duplication', async () => {
      const firstResponse = testCases.slice(0, 250);
      const secondResponse = testCases.slice(200, 450); // 50 duplications
      const thirdResponse = testCases.slice(450, 699);
      const allCases = testCases.slice(0, 699);

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, firstResponse);

      on(`get_cases/${projectId}&limit=250&offset=250`)
        .reply(OK, secondResponse);

      on(`get_cases/${projectId}&limit=250&offset=500`)
        .reply(OK, thirdResponse);

      await api
        .getCases(projectId)
        .should.eventually.be.deep.equal(allCases);
    });
  });

  describe('TestRail >= 6.7', async () => {
    it('no paginate: "_links.next" misses', async () => {
      const response = {
        _links: { next: null },
        cases: testCases.slice(0, 250),
      };

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, response);

      await api
        .getCases(projectId)
        .should.eventually.be.deep.equal(response.cases);
    });

    it('paginate: "_links.next" present', async () => {
      const response = {
        _links: { next: faker.internet.url() },
        cases: testCases.slice(0, 250),
      };

      const lastResponse = {
        cases: testCases.slice(250, 500),
      };

      const allCases = [...response.cases, ...lastResponse.cases];

      on(`get_cases/${projectId}&limit=250&offset=0`)
        .reply(OK, response);

      // duplicates don't affect pagination
      on(`get_cases/${projectId}&limit=250&offset=250`)
        .reply(OK, response);

      on(`get_cases/${projectId}&limit=250&offset=500`)
        .reply(OK, lastResponse);

      await api
        .getCases(projectId)
        .should.eventually.be.deep.equal(allCases);
    });
  });
});
