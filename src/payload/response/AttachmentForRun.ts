import type { Attachment } from './Attachment';

export interface AttachmentForRun extends Attachment {
  entity_type: 'run';
  run_id: number;
}
