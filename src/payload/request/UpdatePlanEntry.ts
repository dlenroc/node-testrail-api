export interface UpdatePlanEntry extends Record<string, unknown> {
  name?: string;
  description?: string;
  assignedto_id?: number;
  include_all?: boolean;
  case_ids?: number[];
  refs?: string;
}
