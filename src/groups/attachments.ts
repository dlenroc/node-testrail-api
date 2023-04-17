import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddAttachment, AttachmentForCase, AttachmentForPlan, AttachmentForPlanEntry, AttachmentForRun, AttachmentForTest, CreatedAttachment, Pagination } from '../payload';

export function addAttachmentToCase(ctx: TestRailCtx, caseId: number, payload: AddAttachment): Promise<CreatedAttachment> {
  return _api(ctx, 'POST', `add_attachment_to_case/${caseId}`, { form: { attachment: payload } });
}

export function addAttachmentToPlan(ctx: TestRailCtx, planId: number, payload: AddAttachment): Promise<CreatedAttachment> {
  return _api(ctx, 'POST', `add_attachment_to_plan/${planId}`, { form: { attachment: payload } });
}

export function addAttachmentToPlanEntry(ctx: TestRailCtx, planId: number, entryId: string, payload: AddAttachment): Promise<CreatedAttachment> {
  return _api(ctx, 'POST', `add_attachment_to_plan_entry/${planId}/${entryId}`, { form: { attachment: payload } });
}

export function addAttachmentToResult(ctx: TestRailCtx, resultId: number, payload: AddAttachment): Promise<CreatedAttachment> {
  return _api(ctx, 'POST', `add_attachment_to_result/${resultId}`, { form: { attachment: payload } });
}

export function addAttachmentToRun(ctx: TestRailCtx, runId: number, payload: AddAttachment): Promise<CreatedAttachment> {
  return _api(ctx, 'POST', `add_attachment_to_run/${runId}`, { form: { attachment: payload } });
}

export function getAttachmentsForCase(ctx: TestRailCtx, caseId: number, filters?: Pagination): Promise<AttachmentForCase[]> {
  return pagination('attachments', filters, (filters) => {
    return _api(ctx, 'GET', `get_attachments_for_case/${caseId}`, { query: filters });
  });
}

export function getAttachmentsForPlan(ctx: TestRailCtx, planId: number, filters?: Pagination): Promise<AttachmentForPlan[]> {
  return pagination('attachments', filters, (filters) => {
    return _api(ctx, 'GET', `get_attachments_for_plan/${planId}`, { query: filters });
  });
}

export function getAttachmentsForPlanEntry(ctx: TestRailCtx, planId: number, entryId: string): Promise<AttachmentForPlanEntry[]> {
  return _api(ctx, 'GET', `get_attachments_for_plan_entry/${planId}/${entryId}`);
}

export function getAttachmentsForRun(ctx: TestRailCtx, runId: number, filters?: Pagination): Promise<AttachmentForRun[]> {
  return pagination('attachments', filters, (filters) => {
    return _api(ctx, 'GET', `get_attachments_for_run/${runId}`, { query: filters });
  });
}

export function getAttachmentsForTest(ctx: TestRailCtx, testId: number): Promise<AttachmentForTest[]> {
  return _api(ctx, 'GET', `get_attachments_for_test/${testId}`);
}

export function getAttachment(ctx: TestRailCtx, attachmentId: string): Promise<Blob> {
  return _api(ctx, 'GET', `get_attachment/${attachmentId}`);
}

export function deleteAttachment(ctx: TestRailCtx, attachmentId: string): Promise<void> {
  return _api(ctx, 'POST', `delete_attachment/${attachmentId}`);
}
