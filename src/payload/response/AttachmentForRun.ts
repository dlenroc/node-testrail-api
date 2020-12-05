import { Attachment } from './Attachment';

export interface AttachmentForRun extends Attachment {
  entity_attachments_id: number;
  icon_name: string;
}
