export type UpdatePlanEntry = Record<string, unknown> & {
  name?: string | undefined;
  description?: string | undefined;
  assignedto_id?: number | undefined;
  include_all?: boolean | undefined;
  case_ids?: number[] | undefined;
  refs?: string | undefined;
};
