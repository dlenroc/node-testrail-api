export interface Test extends Record<string, unknown> {
  assignedto_id?: number;
  case_id: number;
  estimate?: string;
  estimate_forecast?: string;
  id: number;
  milestone_id?: number;
  priority_id: number;
  refs?: string;
  run_id: number;
  status_id: number;
  template_id: number;
  title: string;
  type_id: number;
  cases_display_order: number;
  sections_display_order: number;
}
