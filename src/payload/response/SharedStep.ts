export interface SharedStep extends Record<string, unknown> {
  case_ids: number[];
  created_by: number;
  created_on: number;
  custom_steps_separated: {
    content?: string;
    expected?: string;
    additional_info?: string;
    refs?: string;
  }[];
  id: number;
  project_id: number;
  title: string;
  updated_by: number;
  updated_on: number;
}
