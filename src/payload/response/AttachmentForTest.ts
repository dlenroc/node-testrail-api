import type { Attachment } from './Attachment';

export interface AttachmentForTest extends Attachment {
  entity_type: 'test_change';
}
