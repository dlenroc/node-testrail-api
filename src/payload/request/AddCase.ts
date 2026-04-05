export type AddCase = Record<string, unknown> & {
  title?: string | undefined;
  template_id?: number | undefined;
  type_id?: number | undefined;
  priority_id?: number | undefined;
  estimate?: string | undefined;
  milestone_id?: number | undefined;
  refs?: string | undefined;
};
