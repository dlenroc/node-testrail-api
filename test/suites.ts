import { datatype } from 'faker';
import { AddSuite, Suite, UpdateSuite } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Suites', () => {
  const suiteId = datatype.number();
  const projectId = datatype.number();
  const suite: Suite = jsonFor('Suite');
  const suites = [suite];
  const addSuitePayload: AddSuite = jsonFor('AddSuite');
  const updateSuitePayload: UpdateSuite = jsonFor('UpdateSuite');

  it('get suite', async () => {
    on(`get_suite/${suiteId}`)
      .reply(OK, suite);

    await api
      .getSuite(suiteId)
      .should.eventually.be.deep.equal(suite);
  });

  it('get suites', async () => {
    on(`get_suites/${projectId}`)
      .reply(OK, suites);

    await api
      .getSuites(projectId)
      .should.eventually.be.deep.equal(suites);
  });

  it('add suite', async () => {
    on(`add_suite/${projectId}`, addSuitePayload)
      .reply(OK, suite);

    await api
      .addSuite(projectId, addSuitePayload)
      .should.eventually.be.deep.equal(suite);
  });

  it('update suite', async () => {
    on(`update_suite/${suiteId}`, updateSuitePayload)
      .reply(OK, suite);

    await api
      .updateSuite(suiteId, updateSuitePayload)
      .should.eventually.be.deep.equal(suite);
  });

  it('delete suite', async () => {
    on(`delete_suite/${suiteId}`)
      .reply(OK);

    await api
      .deleteSuite(suiteId)
      .should.be.fulfilled;
  });
});
