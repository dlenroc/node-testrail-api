import type { Attachment } from './Attachment';

export interface AttachmentForPlanEntry extends Attachment {
  entity_type: 'entry';
  plan_entry_id: string;
  plan_id: number;
}
