import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { Priority } from '../payload';

export function getPriorities(ctx: TestRailCtx): Promise<Priority[]> {
  return _api(ctx, 'GET', 'get_priorities');
}
