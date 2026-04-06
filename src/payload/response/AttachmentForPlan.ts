import type { Attachment } from './Attachment.ts';

export interface AttachmentForPlan extends Attachment {
  entity_type: 'plan';
  plan_id: number;
}
