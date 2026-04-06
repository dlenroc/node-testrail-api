import type { Attachment } from './Attachment.ts';

export interface AttachmentForRun extends Attachment {
  entity_type: 'run';
  run_id: number;
}
