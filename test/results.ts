import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Results', async () => {
  const testId = random.number();
  const runId = random.number();
  const caseId = random.number();
  const result: Model.Result = await jsonFor('Result');
  const results = [result];
  const resultFilters: Payload.ResultFilters = await jsonFor('ResultFilters');
  const resultForRunFilters: Payload.ResultForRunFilters = await jsonFor('ResultForRunFilters');
  const addResultPayload: Payload.AddResult = await jsonFor('AddResult');
  const addResultsPayload: Payload.AddResults = await jsonFor('AddResults');
  const addResultsForCases: Payload.AddResultsForCases = await jsonFor('AddResultsForCases');

  it('get results', async () => {
    on(`get_results/${testId}`)
      .reply(OK, results);

    await api
      .getResults(testId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results', async () => {
    on(`get_results/${testId}&${qs(resultFilters)}`)
      .reply(OK, results);

    await api
      .getResults(testId, resultFilters)
      .should.eventually.be.deep.equal(results);
  });

  it('get results for case', async () => {
    on(`get_results_for_case/${runId}/${caseId}`)
      .reply(OK, results);

    await api
      .getResultsForCase(runId, caseId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results for case', async () => {
    on(`get_results_for_case/${runId}/${caseId}&${qs(resultFilters)}`)
      .reply(OK, results);

    await api
      .getResultsForCase(runId, caseId, resultFilters)
      .should.eventually.be.deep.equal(results);
  });

  it('get results for run', async () => {
    on(`get_results_for_run/${runId}`)
      .reply(OK, results);

    await api
      .getResultsForRun(runId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results for run', async () => {
    on(`get_results_for_run/${runId}&${qs(resultForRunFilters)}`)
      .reply(OK, results);

    await api
      .getResultsForRun(runId, resultForRunFilters)
      .should.eventually.be.deep.equal(results);
  });

  it('add result for test', async () => {
    on(`add_result/${testId}`, addResultPayload)
      .reply(OK, result);

    await api
      .addResult(testId, addResultPayload)
      .should.eventually.be.deep.equal(result);
  });

  it('add result for case', async () => {
    on(`add_result_for_case/${runId}/${caseId}`, addResultPayload)
      .reply(OK, result);

    await api
      .addResultForCase(runId, caseId, addResultPayload)
      .should.eventually.be.deep.equal(result);
  });

  it('add results', async () => {
    on(`add_results/${runId}`, addResultsPayload)
      .reply(OK, results);

    await api
      .addResults(runId, addResultsPayload)
      .should.eventually.be.deep.equal(results);
  });

  it('add results for cases', async () => {
    on(`add_results_for_cases/${runId}`, addResultsForCases)
      .reply(OK, results);

    await api
      .addResultsForCases(runId, addResultsForCases)
      .should.eventually.be.deep.equal(results);
  });
});
