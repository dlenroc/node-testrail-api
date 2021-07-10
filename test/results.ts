import { datatype } from 'faker';
import { AddResult, AddResults, AddResultsForCases, Result, ResultFilters, ResultForRunFilters } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Results', () => {
  const testId = datatype.number();
  const runId = datatype.number();
  const caseId = datatype.number();
  const result: Result = jsonFor('Result');
  const results = [result];
  const resultFilters: ResultFilters = jsonFor('ResultFilters');
  const resultForRunFilters: ResultForRunFilters = jsonFor('ResultForRunFilters');
  const addResultPayload: AddResult = jsonFor('AddResult');
  const addResultsPayload: AddResults = jsonFor('AddResults');
  const addResultsForCases: AddResultsForCases = jsonFor('AddResultsForCases');

  it('get results', async () => {
    on(`get_results/${testId}&limit=250&offset=0`)
      .reply(OK, results);

    await api
      .getResults(testId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results', async () => {
    on(`get_results/${testId}&${qs(resultFilters)}&limit=250&offset=0`)
      .reply(OK, results);

    await api
      .getResults(testId, resultFilters)
      .should.eventually.be.deep.equal(results);
  });

  it('get results for case', async () => {
    on(`get_results_for_case/${runId}/${caseId}&limit=250&offset=0`)
      .reply(OK, results);

    await api
      .getResultsForCase(runId, caseId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results for case', async () => {
    on(`get_results_for_case/${runId}/${caseId}&${qs(resultFilters)}&limit=250&offset=0`)
      .reply(OK, results);

    await api
      .getResultsForCase(runId, caseId, resultFilters)
      .should.eventually.be.deep.equal(results);
  });

  it('get results for run', async () => {
    on(`get_results_for_run/${runId}&limit=250&offset=0`)
      .reply(OK, results);

    await api
      .getResultsForRun(runId)
      .should.eventually.be.deep.equal(results);
  });

  it('get filtered results for run', async () => {
    on(`get_results_for_run/${runId}&${qs(resultForRunFilters)}&limit=250&offset=0`)
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
