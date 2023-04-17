import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { Pagination, Role } from '../payload';

export function getRoles(ctx: TestRailCtx, filters?: Pagination): Promise<Role[]> {
  return pagination('roles', filters, (filters) => {
    return _api(ctx, 'GET', 'get_roles', { query: filters });
  });
}
