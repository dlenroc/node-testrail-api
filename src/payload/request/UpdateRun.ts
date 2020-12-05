export interface UpdateRun extends Record<string, unknown> {
  name?: string;
  description?: string;
  milestone_id?: number;
  include_all?: boolean;
  case_ids?: number[];
  refs?: string;
}
