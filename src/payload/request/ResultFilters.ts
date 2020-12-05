export interface ResultFilters extends Record<string, unknown> {
  defects?: string;
  limit?: number;
  offset?: number;
  status_id?: number | number[];
}
