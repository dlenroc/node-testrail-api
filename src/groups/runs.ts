import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddRun, Run, RunFilters, UpdateRun } from '../payload';

export function getRun(ctx: TestRailCtx, runId: number): Promise<Run> {
  return _api(ctx, 'GET', `get_run/${runId}`);
}

export function getRuns(ctx: TestRailCtx, projectId: number, filters?: RunFilters): Promise<Run[]> {
  return pagination('runs', filters, (filters) => {
    return _api(ctx, 'GET', `get_runs/${projectId}`, { query: filters });
  });
}

export function addRun(ctx: TestRailCtx, projectId: number, payload: AddRun): Promise<Run> {
  return _api(ctx, 'POST', `add_run/${projectId}`, { json: payload });
}

export function updateRun(ctx: TestRailCtx, runId: number, payload: UpdateRun): Promise<Run> {
  return _api(ctx, 'POST', `update_run/${runId}`, { json: payload });
}

export function closeRun(ctx: TestRailCtx, runId: number): Promise<Run> {
  return _api(ctx, 'POST', `close_run/${runId}`);
}

export function deleteRun(ctx: TestRailCtx, runId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_run/${runId}`);
}
