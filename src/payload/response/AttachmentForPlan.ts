import { Attachment } from './Attachment';

export interface AttachmentForPlan extends Attachment {
  entity_attachments_id: number;
  icon_name: string;
}
