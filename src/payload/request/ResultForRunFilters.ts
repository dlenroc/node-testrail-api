export interface ResultForRunFilters extends Record<string, unknown> {
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  defects?: string;
  limit?: number;
  offset?: number;
  status_id?: number | number[];
}
