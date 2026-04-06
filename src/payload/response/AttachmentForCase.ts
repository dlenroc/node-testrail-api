import type { Attachment } from './Attachment.ts';

export interface AttachmentForCase extends Attachment {
  entity_type: 'case';
}
