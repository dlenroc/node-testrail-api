import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddProject, Project, ProjectFilters, UpdateProject } from '../payload';

export function getProject(ctx: TestRailCtx, projectId: number): Promise<Project> {
  return _api(ctx, 'GET', `get_project/${projectId}`);
}

export function getProjects(ctx: TestRailCtx, filters?: ProjectFilters): Promise<Project[]> {
  return pagination('projects', filters, (filters) => {
    return _api(ctx, 'GET', 'get_projects', { query: filters });
  });
}

export function addProject(ctx: TestRailCtx, payload: AddProject): Promise<Project> {
  return _api(ctx, 'POST', 'add_project', { json: payload });
}

export function updateProject(ctx: TestRailCtx, projectId: number, payload: UpdateProject): Promise<Project> {
  return _api(ctx, 'POST', `update_project/${projectId}`, { json: payload });
}

export function deleteProject(ctx: TestRailCtx, projectId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_project/${projectId}`);
}
