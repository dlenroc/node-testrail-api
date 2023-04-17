import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddSharedStep, DeleteSharedStep, Pagination, SharedStep, SharedStepFilters, SharedStepHistory, UpdateSharedStep } from '../payload';

export function getSharedStep(ctx: TestRailCtx, stepId: number): Promise<SharedStep> {
  return _api(ctx, 'GET', `get_shared_step/${stepId}`);
}

export function getSharedSteps(ctx: TestRailCtx, projectId: number, filters?: SharedStepFilters): Promise<SharedStep[]> {
  return pagination('shared_steps', filters, (filters) => {
    return _api(ctx, 'GET', `get_shared_steps/${projectId}`, { query: filters });
  });
}

export function getSharedStepHistory(ctx: TestRailCtx, stepId: number, filters?: Pagination): Promise<SharedStepHistory[]> {
  return pagination('step_history', filters, (filters) => {
    return _api(ctx, 'GET', `get_shared_step_history/${stepId}`, { query: filters });
  });
}

export function addSharedStep(ctx: TestRailCtx, projectId: number, payload: AddSharedStep): Promise<SharedStep> {
  return _api(ctx, 'POST', `add_shared_step/${projectId}`, { json: payload });
}

export function updateSharedStep(ctx: TestRailCtx, stepId: number, payload: UpdateSharedStep): Promise<SharedStep> {
  return _api(ctx, 'POST', `update_shared_step/${stepId}`, { json: payload });
}

export function deleteSharedStep(ctx: TestRailCtx, stepId: number, payload?: DeleteSharedStep): Promise<void> {
  return _api(ctx, 'POST', `delete_shared_step/${stepId}`, { json: payload });
}
