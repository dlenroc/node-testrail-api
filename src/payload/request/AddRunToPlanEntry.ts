export interface AddRunToPlanEntry extends Record<string, unknown> {
  config_ids?: number[];
  description?: string;
  assignedto_id?: number;
  include_all?: boolean;
  case_ids?: number[];
  refs?: string;
}
