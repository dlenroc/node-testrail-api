export interface AddCase extends Record<string, unknown> {
  title?: string;
  template_id?: number;
  type_id?: number;
  priority_id?: number;
  estimate?: string;
  milestone_id?: number;
  refs?: string;
}
