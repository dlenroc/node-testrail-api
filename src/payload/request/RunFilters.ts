export interface RunFilters extends Record<string, unknown> {
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  is_completed?: boolean;
  limit?: number;
  offset?: number;
  milestone_id?: number | number[];
  refs?: string;
  suite_id?: number | number[];
}
