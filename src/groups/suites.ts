import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { AddSuite, Suite, UpdateSuite } from '../payload';

export function getSuite(ctx: TestRailCtx, suiteId: number): Promise<Suite> {
  return _api(ctx, 'GET', `get_suite/${suiteId}`);
}

export function getSuites(ctx: TestRailCtx, projectId: number): Promise<Suite[]> {
  return _api(ctx, 'GET', `get_suites/${projectId}`);
}

export function addSuite(ctx: TestRailCtx, projectId: number, payload: AddSuite): Promise<Suite> {
  return _api(ctx, 'POST', `add_suite/${projectId}`, { json: payload });
}

export function updateSuite(ctx: TestRailCtx, suiteId: number, payload: UpdateSuite): Promise<Suite> {
  return _api(ctx, 'POST', `update_suite/${suiteId}`, { json: payload });
}

export function deleteSuite(ctx: TestRailCtx, suiteId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_suite/${suiteId}`);
}
