import type { PlanEntry } from './PlanEntry';

export interface Plan extends Record<string, unknown> {
  assignedto_id?: number;
  blocked_count: number;
  completed_on?: number;
  created_by: number;
  created_on: number;
  custom_status1_count: number;
  custom_status2_count: number;
  custom_status3_count: number;
  custom_status4_count: number;
  custom_status5_count: number;
  custom_status6_count: number;
  custom_status7_count: number;
  description?: string;
  entries: PlanEntry[];
  failed_count: number;
  id: number;
  is_completed: boolean;
  milestone_id?: number;
  name: string;
  passed_count: number;
  project_id: number;
  retest_count: number;
  untested_count: number;
  url: string;
}
