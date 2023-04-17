import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddResult, AddResults, AddResultsForCases, Result, ResultFilters, ResultForRunFilters } from '../payload';

export function getResults(ctx: TestRailCtx, testId: number, filters?: ResultFilters): Promise<Result[]> {
  return pagination('results', filters, (filters) => {
    return _api(ctx, 'GET', `get_results/${testId}`, { query: filters });
  });
}

export function getResultsForCase(ctx: TestRailCtx, runId: number, caseId: number, filters?: ResultFilters): Promise<Result[]> {
  return pagination('results', filters, (filters) => {
    return _api(ctx, 'GET', `get_results_for_case/${runId}/${caseId}`, { query: filters });
  });
}

export function getResultsForRun(ctx: TestRailCtx, runId: number, filters?: ResultForRunFilters): Promise<Result[]> {
  return pagination('results', filters, (filters) => {
    return _api(ctx, 'GET', `get_results_for_run/${runId}`, { query: filters });
  });
}

export function addResult(ctx: TestRailCtx, testId: number, payload: AddResult): Promise<Result> {
  return _api(ctx, 'POST', `add_result/${testId}`, { json: payload });
}

export function addResultForCase(ctx: TestRailCtx, runId: number, caseId: number, payload: AddResult): Promise<Result> {
  return _api(ctx, 'POST', `add_result_for_case/${runId}/${caseId}`, { json: payload });
}

export function addResults(ctx: TestRailCtx, runId: number, payload: AddResults): Promise<Result[]> {
  return _api(ctx, 'POST', `add_results/${runId}`, { json: payload });
}

export function addResultsForCases(ctx: TestRailCtx, runId: number, payload: AddResultsForCases): Promise<Result[]> {
  return _api(ctx, 'POST', `add_results_for_cases/${runId}`, { json: payload });
}
