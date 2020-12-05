import { Attachment } from './Attachment';

export interface AttachmentForTest extends Attachment {
  case_id: number;
  result_id: number;
}
