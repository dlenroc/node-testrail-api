export type UpdatePlan = Record<string, unknown> & {
  name?: string | undefined;
  description?: string | undefined;
  milestone_id?: number | undefined;
};
