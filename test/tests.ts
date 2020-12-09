import { random } from 'faker';
import { Test, TestFilters } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Tests', () => {
  const testId = random.number();
  const runId = random.number();
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
    on(`get_tests/${runId}`)
      .reply(OK, tests);

    await api
      .getTests(runId)
      .should.eventually.be.deep.equal(tests);
  });

  it('get filtered tests', async () => {
    on(`get_tests/${runId}&${qs(testsFilters)}`)
      .reply(OK, tests);

    await api
      .getTests(runId, testsFilters)
      .should.eventually.be.deep.equal(tests);
  });
});