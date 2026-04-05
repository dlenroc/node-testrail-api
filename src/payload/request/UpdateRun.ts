export type UpdateRun = Record<string, unknown> & {
  name?: string | undefined;
  description?: string | undefined;
  milestone_id?: number | undefined;
  include_all?: boolean | undefined;
  case_ids?: number[] | undefined;
  refs?: string | undefined;
};
