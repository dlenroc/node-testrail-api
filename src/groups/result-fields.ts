import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { ResultField } from '../payload';

export function getResultFields(ctx: TestRailCtx): Promise<ResultField[]> {
  return _api(ctx, 'GET', 'get_result_fields');
}
