import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddVariable, Pagination, Variable } from '../payload';

export function getVariables(ctx: TestRailCtx, projectId: number, filters?: Pagination): Promise<Variable[]> {
  return pagination('variables', filters, (filters) => {
    return _api(ctx, 'GET', `get_variables/${projectId}`, { query: filters });
  });
}

export function addVariable(ctx: TestRailCtx, projectId: number, payload: AddVariable): Promise<Variable> {
  return _api(ctx, 'POST', `add_variable/${projectId}`, { json: payload });
}

export function updateVariable(ctx: TestRailCtx, variableId: number, payload: AddVariable): Promise<Variable> {
  return _api(ctx, 'POST', `update_variable/${variableId}`, { json: payload });
}

export function deleteVariable(ctx: TestRailCtx, variableId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_variable/${variableId}`);
}
