export type AddMilestone = Record<string, unknown> & {
  name?: string | undefined;
  description?: string | undefined;
  due_on?: number | undefined;
  parent_id?: number | undefined;
  refs?: string | undefined;
  start_on?: number | undefined;
};
