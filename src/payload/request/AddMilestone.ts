export interface AddMilestone extends Record<string, unknown> {
  name?: string;
  description?: string;
  due_on?: number;
  parent_id?: number;
  refs?: string;
  start_on?: number;
}
