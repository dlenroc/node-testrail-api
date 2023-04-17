import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { AddCaseField, CaseField } from '../payload';

export function getCaseFields(ctx: TestRailCtx): Promise<CaseField[]> {
  return _api(ctx, 'GET', 'get_case_fields');
}

export function addCaseField(ctx: TestRailCtx, payload: AddCaseField): Promise<CaseField> {
  return _api(ctx, 'POST', 'add_case_field', { json: payload });
}
