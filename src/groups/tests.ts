import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { Test, TestFilters } from '../payload';

export function getTest(ctx: TestRailCtx, testId: number): Promise<Test> {
  return _api(ctx, 'GET', `get_test/${testId}`);
}

export function getTests(ctx: TestRailCtx, runId: number, filters?: TestFilters): Promise<Test[]> {
  return pagination('tests', filters, (filters) => {
    return _api(ctx, 'GET', `get_tests/${runId}`, { query: filters });
  });
}
