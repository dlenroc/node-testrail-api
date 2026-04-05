export type UpdateRunInPlanEntry = Record<string, unknown> & {
  description?: string | undefined;
  assignedto_id?: number | undefined;
  include_all?: boolean | undefined;
  case_ids?: number[] | undefined;
  refs?: string | undefined;
};
