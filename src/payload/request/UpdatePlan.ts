export interface UpdatePlan extends Record<string, unknown> {
  name?: string;
  description?: string;
  milestone_id?: number;
}
