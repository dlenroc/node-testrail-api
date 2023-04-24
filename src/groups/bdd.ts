import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { AddAttachment, Case } from '../payload';

export function getBdd(ctx: TestRailCtx, caseId: number): Promise<Blob> {
  return _api(ctx, 'GET', `get_bdd/${caseId}`);
}

export function addBdd(ctx: TestRailCtx, sectionId: number, payload: AddAttachment): Promise<Case> {
  return _api(ctx, 'POST', `add_bdd/${sectionId}`, { form: { attachment: payload }});
}
