import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { AddUser, User, UserFilters } from '../payload';

export function getUser(ctx: TestRailCtx, userId: number): Promise<User> {
  return _api(ctx, 'GET', `get_user/${userId}`);
}

export function getCurrentUser(ctx: TestRailCtx): Promise<User> {
  return _api(ctx, 'GET', `get_current_user`);
}

export function getUserByEmail(ctx: TestRailCtx, email: string): Promise<User> {
  return _api(ctx, 'GET', 'get_user_by_email', { query: { email } });
}

export function getUsers(ctx: TestRailCtx, filters?: UserFilters): Promise<User[]> {
  return _api(ctx, 'GET', 'get_users', { query: filters });
}

export function addUser(ctx: TestRailCtx, payload: AddUser): Promise<User> {
  return _api(ctx, 'POST', 'add_user', { json: payload });
}

export function updateUser(ctx: TestRailCtx, userId: number, payload: AddUser): Promise<User> {
  return _api(ctx, 'POST', `update_user/${userId}`, { json: payload });
}
