export interface Suite extends Record<string, unknown> {
  completed_on?: number;
  description?: string;
  id: number;
  is_baseline: boolean;
  is_completed: boolean;
  is_master: boolean;
  name: string;
  project_id: number;
  url: string;
}
