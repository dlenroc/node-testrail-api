import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddMilestone, Milestone, MilestoneFilters, UpdateMilestone } from '../payload';

export function getMilestone(ctx: TestRailCtx, milestoneId: number): Promise<Milestone> {
  return _api(ctx, 'GET', `get_milestone/${milestoneId}`);
}

export function getMilestones(ctx: TestRailCtx, projectId: number, filters?: MilestoneFilters): Promise<Milestone[]> {
  return pagination('milestones', filters, (filters) => {
    return _api(ctx, 'GET', `get_milestones/${projectId}`, { query: filters });
  });
}

export function addMilestone(ctx: TestRailCtx, projectId: number, payload: AddMilestone): Promise<Milestone> {
  return _api(ctx, 'POST', `add_milestone/${projectId}`, { json: payload });
}

export function updateMilestone(ctx: TestRailCtx, milestoneId: number, payload: UpdateMilestone): Promise<Milestone> {
  return _api(ctx, 'POST', `update_milestone/${milestoneId}`, { json: payload });
}

export function deleteMilestone(ctx: TestRailCtx, milestoneId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_milestone/${milestoneId}`);
}
