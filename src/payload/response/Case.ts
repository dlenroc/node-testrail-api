export interface Case extends Record<string, unknown> {
  created_by: number;
  created_on: number;
  display_order: number;
  estimate?: string;
  estimate_forecast?: string;
  id: number;
  milestone_id?: number;
  priority_id: number;
  refs?: string;
  section_id: number;
  suite_id: number;
  template_id: number;
  title: string;
  type_id: number;
  updated_by: number;
  updated_on: number;
}
