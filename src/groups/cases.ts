import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddCase, Case, CaseFilters, CaseHistory, CopyCasesToSection, DeleteCases, MoveCasesToSection, Pagination, UpdateCase, UpdateCases } from '../payload';

export function getCase(ctx: TestRailCtx, caseId: number): Promise<Case> {
  return _api(ctx, 'GET', `get_case/${caseId}`);
}

export function getCases(ctx: TestRailCtx, projectId: number, filters?: CaseFilters): Promise<Case[]> {
  return pagination('cases', filters, (filters) => {
    return _api(ctx, 'GET', `get_cases/${projectId}`, { query: filters });
  });
}

export function getHistoryForCase(ctx: TestRailCtx, caseId: number, filters?: Pagination): Promise<CaseHistory[]> {
  return pagination('history', filters, (filters) => {
    return _api(ctx, 'GET', `get_history_for_case/${caseId}`, { query: filters });
  });
}

export function addCase(ctx: TestRailCtx, sectionId: number, payload: AddCase): Promise<Case> {
  return _api(ctx, 'POST', `add_case/${sectionId}`, { json: payload });
}

export function copyCasesToSection(ctx: TestRailCtx, sectionId: number, payload: CopyCasesToSection): Promise<void> {
  return _api(ctx, 'POST', `copy_cases_to_section/${sectionId}`, { json: payload });
}

export function updateCase(ctx: TestRailCtx, caseId: number, payload: UpdateCase): Promise<Case> {
  return _api(ctx, 'POST', `update_case/${caseId}`, { json: payload });
}

export function updateCases(ctx: TestRailCtx, suiteId: number, payload: UpdateCases): Promise<void> {
  return _api(ctx, 'POST', `update_cases/${suiteId}`, { json: payload });
}

export function moveCasesToSection(ctx: TestRailCtx, sectionId: number, payload: MoveCasesToSection): Promise<void> {
  return _api(ctx, 'POST', `move_cases_to_section/${sectionId}`, { json: payload });
}

export function deleteCase(ctx: TestRailCtx, caseId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_case/${caseId}`);
}

export function deleteCases(ctx: TestRailCtx, suiteId: number, payload: DeleteCases): Promise<void> {
  return _api(ctx, 'POST', `delete_cases/${suiteId}`, { json: payload });
}
