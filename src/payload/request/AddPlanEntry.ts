import type { AddRunToPlanEntry } from './AddRunToPlanEntry';

export interface AddPlanEntry extends Record<string, unknown> {
  suite_id?: number;
  name?: string;
  description?: string;
  assignedto_id?: number;
  include_all?: boolean;
  case_ids?: number[];
  config_ids?: number[];
  refs?: string;
  runs?: AddRunToPlanEntry[];
}
