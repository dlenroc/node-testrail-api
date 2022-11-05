import type { Attachment } from './Attachment';

export interface AttachmentForCase extends Attachment {
  entity_type: 'case';
}
