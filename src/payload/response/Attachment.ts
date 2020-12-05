export interface Attachment extends Record<string, unknown> {
  case_id?: number;
  created_on: number;
  entity_attachments_id?: number;
  icon_name?: string;
  id: number;
  name: string;
  project_id: number;
  result_id?: number;
  size: number;
  user_id: number;
}
