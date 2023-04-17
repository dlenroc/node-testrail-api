import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { CaseStatus, Pagination, Status } from '../payload';

export function getStatuses(ctx: TestRailCtx): Promise<Status[]> {
  return _api(ctx, 'GET', 'get_statuses');
}

export function getCaseStatuses(ctx: TestRailCtx, filters?: Pagination): Promise<CaseStatus[]> {
  return pagination('case_statuses', filters, (filters) => {
    return _api(ctx, 'GET', 'get_case_statuses', { query: filters });
  });
}
