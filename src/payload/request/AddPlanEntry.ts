import type { AddRunToPlanEntry } from './AddRunToPlanEntry.ts';

export type AddPlanEntry = Record<string, unknown> & {
  suite_id?: number | undefined;
  name?: string | undefined;
  description?: string | undefined;
  assignedto_id?: number | undefined;
  include_all?: boolean | undefined;
  case_ids?: number[] | undefined;
  config_ids?: number[] | undefined;
  refs?: string | undefined;
  runs?: AddRunToPlanEntry[] | undefined;
};
