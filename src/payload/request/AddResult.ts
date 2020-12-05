export interface AddResult extends Record<string, unknown> {
  status_id?: number;
  comment?: string;
  version?: string;
  elapsed?: string;
  defects?: string;
  assignedto_id?: number;
}
