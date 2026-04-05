export type AddRunToPlanEntry = Record<string, unknown> & {
  config_ids?: number[] | undefined;
  description?: string | undefined;
  assignedto_id?: number | undefined;
  include_all?: boolean | undefined;
  case_ids?: number[] | undefined;
  refs?: string | undefined;
};
