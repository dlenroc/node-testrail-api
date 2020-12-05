export interface Result extends Record<string, unknown> {
  assignedto_id?: number;
  attachment_ids: number[];
  comment?: string;
  created_by: number;
  created_on: number;
  defects?: string;
  elapsed?: string;
  id: number;
  status_id?: number;
  test_id: number;
  version?: string;
}
