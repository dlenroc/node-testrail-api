import type { Attachment } from './Attachment.ts';

export interface AttachmentForTest extends Attachment {
  entity_type: 'test_change';
}
