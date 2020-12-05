import { Attachment } from './Attachment';

export interface AttachmentForPlanEntry extends Attachment {
  entity_attachments_id: number;
  icon_name: string;
}
