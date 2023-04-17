import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddGroup, Group, Pagination } from '../payload';

export function getGroup(ctx: TestRailCtx, groupId: number): Promise<Group> {
  return _api(ctx, 'GET', `get_group/${groupId}`);
}

export function getGroups(ctx: TestRailCtx, filters?: Pagination): Promise<Group[]> {
  return pagination('groups', filters, (filters) => {
    return _api(ctx, 'GET', 'get_groups', { query: filters });
  });
}

export function addGroup(ctx: TestRailCtx, payload: AddGroup): Promise<Group> {
  return _api(ctx, 'POST', 'add_group', { json: payload });
}

export function updateGroup(ctx: TestRailCtx, groupId: number, payload: AddGroup): Promise<Group> {
  return _api(ctx, 'POST', `update_group/${groupId}`, { json: payload });
}

export function deleteGroup(ctx: TestRailCtx, groupId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_group/${groupId}`);
}
