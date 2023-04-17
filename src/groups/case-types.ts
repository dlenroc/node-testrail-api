import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { CaseType } from '../payload';

export function getCaseTypes(ctx: TestRailCtx): Promise<CaseType[]> {
  return _api(ctx, 'GET', 'get_case_types');
}
