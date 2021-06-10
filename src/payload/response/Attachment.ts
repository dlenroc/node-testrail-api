export interface Attachment extends Record<string, unknown> {
  client_id: number;
  created_on: number;
  data_id: string;
  entity_id: string;
  entity_type: string;
  filename: string;
  filetype: string;
  icon: string;
  id: string;
  is_image: boolean;
  legacy_id: number;
  name: string;
  project_id: number;
  size: number;
  user_id: number;
}
