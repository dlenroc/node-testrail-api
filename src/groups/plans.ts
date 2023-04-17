import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddPlan, AddPlanEntry, AddRunToPlanEntry, Plan, PlanEntry, PlanFilters, PlanItem, UpdatePlan, UpdatePlanEntry, UpdateRunInPlanEntry } from '../payload';

export function getPlan(ctx: TestRailCtx, planId: number): Promise<Plan> {
  return _api(ctx, 'GET', `get_plan/${planId}`);
}

export function getPlans(ctx: TestRailCtx, projectId: number, filters?: PlanFilters): Promise<PlanItem[]> {
  return pagination('plans', filters, (filters) => {
    return _api(ctx, 'GET', `get_plans/${projectId}`, { query: filters });
  });
}

export function addPlan(ctx: TestRailCtx, projectId: number, payload: AddPlan): Promise<Plan> {
  return _api(ctx, 'POST', `add_plan/${projectId}`, { json: payload });
}

export function addPlanEntry(ctx: TestRailCtx, planId: number, payload: AddPlanEntry): Promise<PlanEntry> {
  return _api(ctx, 'POST', `add_plan_entry/${planId}`, { json: payload });
}

export function addRunToPlanEntry(ctx: TestRailCtx, planId: number, entryId: string, payload: AddRunToPlanEntry): Promise<PlanEntry> {
  return _api(ctx, 'POST', `add_run_to_plan_entry/${planId}/${entryId}`, { json: payload });
}

export function updatePlan(ctx: TestRailCtx, planId: number, payload: UpdatePlan): Promise<Plan> {
  return _api(ctx, 'POST', `update_plan/${planId}`, { json: payload });
}

export function updatePlanEntry(ctx: TestRailCtx, planId: number, entryId: string, payload: UpdatePlanEntry): Promise<PlanEntry> {
  return _api(ctx, 'POST', `update_plan_entry/${planId}/${entryId}`, { json: payload });
}

export function updateRunInPlanEntry(ctx: TestRailCtx, runId: number, payload: UpdateRunInPlanEntry): Promise<PlanEntry> {
  return _api(ctx, 'POST', `update_run_in_plan_entry/${runId}`, { json: payload });
}

export function closePlan(ctx: TestRailCtx, planId: number): Promise<Plan> {
  return _api(ctx, 'POST', `close_plan/${planId}`);
}

export function deletePlan(ctx: TestRailCtx, planId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_plan/${planId}`);
}

export function deletePlanEntry(ctx: TestRailCtx, planId: number, entryId: string): Promise<void> {
  return _api(ctx, 'POST', `delete_plan_entry/${planId}/${entryId}`);
}

export function deleteRunFromPlanEntry(ctx: TestRailCtx, runId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_run_from_plan_entry/${runId}`);
}
