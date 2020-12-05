export interface UpdateRunInPlanEntry extends Record<string, unknown> {
  description?: string;
  assignedto_id?: number;
  include_all?: boolean;
  case_ids?: number[];
  refs?: string;
}
