import type { Attachment } from './Attachment';

export interface AttachmentForPlan extends Attachment {
  entity_type: 'plan';
  plan_id: number;
}
