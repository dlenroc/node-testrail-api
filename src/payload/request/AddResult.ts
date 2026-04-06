export type AddResult = Record<string, unknown> & {
  status_id?: number | undefined;
  comment?: string | undefined;
  version?: string | undefined;
  elapsed?: string | undefined;
  defects?: string | undefined;
  assignedto_id?: number | undefined;
};
