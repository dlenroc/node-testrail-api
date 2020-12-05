import { Attachment } from './Attachment';

export interface AttachmentForCase extends Attachment {
  case_id: number;
}
