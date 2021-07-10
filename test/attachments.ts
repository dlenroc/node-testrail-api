import { datatype, random } from 'faker';
import { AddAttachment, Attachment, AttachmentForCase, AttachmentForPlan, AttachmentForPlanEntry, AttachmentForRun, AttachmentForTest, CreatedAttachment } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Attachments', () => {
  const planId = datatype.number();
  const entryId = datatype.uuid();
  const resultId = datatype.number();
  const runId = datatype.number();
  const caseId = datatype.number();
  const testId = datatype.number();
  const attachmentId = datatype.uuid()
  const createdAttachment: CreatedAttachment = jsonFor('CreatedAttachment');
  const attachmentForCase: AttachmentForCase = jsonFor('AttachmentForCase');
  const attachmentsForCase = [attachmentForCase];
  const attachmentForPlan: AttachmentForPlan = jsonFor('AttachmentForPlan');
  const attachmentsForPlan = [attachmentForPlan];
  const attachmentForPlanEntry: AttachmentForPlanEntry = jsonFor('AttachmentForPlanEntry');
  const attachmentsForPlanEntry = [attachmentForPlanEntry];
  const attachmentForRun: AttachmentForRun = jsonFor('AttachmentForRun');
  const attachmentsForRun = [attachmentForRun];
  const attachmentForTest: AttachmentForTest = jsonFor('AttachmentForTest');
  const attachmentsForTest = [attachmentForTest];
  const attachment: Attachment = jsonFor('Attachment');
  const hasAttachment = /form-data; name="attachment"/m;
  const addAttachmentPayload: AddAttachment = {
    name: 'attachment.txt',
    value: random.words(),
  };

  it('add attachment to plan', async () => {
    on(`add_attachment_to_plan/${planId}`, hasAttachment)
      .reply(OK, createdAttachment);

    await api
      .addAttachmentToPlan(planId, addAttachmentPayload)
      .should.eventually.be.deep.equal(createdAttachment);
  });

  it('add attachment to plan', async () => {
    on(`add_attachment_to_plan_entry/${planId}/${entryId}`, hasAttachment)
      .reply(OK, createdAttachment);

    await api
      .addAttachmentToPlanEntry(planId, entryId, addAttachmentPayload)
      .should.eventually.be.deep.equal(createdAttachment);
  });

  it('add attachment to result', async () => {
    on(`add_attachment_to_result/${resultId}`, hasAttachment)
      .reply(OK, createdAttachment);

    await api
      .addAttachmentToResult(resultId, addAttachmentPayload)
      .should.eventually.be.deep.equal(createdAttachment);
  });

  it('add attachment to run', async () => {
    on(`add_attachment_to_run/${runId}`, hasAttachment)
      .reply(OK, createdAttachment);

    await api
      .addAttachmentToRun(runId, addAttachmentPayload)
      .should.eventually.be.deep.equal(createdAttachment);
  });

  it('get attachments for case', async () => {
    on(`get_attachments_for_case/${caseId}&limit=250&offset=0`)
      .reply(OK, attachmentsForCase);

    await api
      .getAttachmentsForCase(caseId)
      .should.eventually.be.deep.equal(attachmentsForCase);
  });

  it('get attachments for plan', async () => {
    on(`get_attachments_for_plan/${planId}&limit=250&offset=0`)
      .reply(OK, attachmentsForPlan);

    await api
      .getAttachmentsForPlan(planId)
      .should.eventually.be.deep.equal(attachmentsForPlan);
  });

  it('get attachments for plan entry', async () => {
    on(`get_attachments_for_plan_entry/${planId}/${entryId}`)
      .reply(OK, attachmentsForPlanEntry);

    await api
      .getAttachmentsForPlanEntry(planId, entryId)
      .should.eventually.be.deep.equal(attachmentsForPlanEntry);
  });

  it('get attachments for run', async () => {
    on(`get_attachments_for_run/${runId}&limit=250&offset=0`)
      .reply(OK, attachmentsForRun);

    await api
      .getAttachmentsForRun(runId)
      .should.eventually.be.deep.equal(attachmentsForRun);
  });

  it('get attachments for tests', async () => {
    on(`get_attachments_for_test/${testId}`)
      .reply(OK, attachmentsForTest);

    await api
      .getAttachmentsForTest(testId)
      .should.eventually.be.deep.equal(attachmentsForTest);
  });

  it('get_attachment', async () => {
    on(`get_attachment/${attachmentId}`)
      .reply(OK, attachment);

    await api
      .getAttachment(attachmentId)
      .should.eventually.be.deep.equal(attachment);
  });

  it('delete attachment', async () => {
    on(`delete_attachment/${attachmentId}`)
      .reply(OK);

    await api
      .deleteAttachment(attachmentId)
      .should.be.fulfilled;
  });
});
