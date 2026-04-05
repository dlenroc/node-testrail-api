import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { Test, TestFilters } from '../src/TestRail.ts';
import { OK, api, jsonFor, on, qs } from './_helper.ts';

describe('Tests', () => {
  const testId = faker.number.int();
  const runId = faker.number.int();
  const test: Test = jsonFor('Test');
  const tests: Test[] = [test];
  const testsFilters: TestFilters = jsonFor('TestFilters');

  it('get test', async () => {
    on(`get_test/${testId}`)
      .reply(OK, test);

    await api
      .getTest(testId)
      .should.eventually.be.deep.equal(test);
  });

  it('get tests', async () => {
    on(`get_tests/${runId}&limit=250&offset=0`)
      .reply(OK, tests);

    await api
      .getTests(runId)
      .should.eventually.be.deep.equal(tests);
  });

  it('get filtered tests', async () => {
    on(`get_tests/${runId}&${qs(testsFilters)}&limit=250&offset=0`)
      .reply(OK, tests);

    await api
      .getTests(runId, testsFilters)
      .should.eventually.be.deep.equal(tests);
  });
});
