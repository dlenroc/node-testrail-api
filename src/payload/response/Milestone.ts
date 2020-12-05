export interface Milestone extends Record<string, unknown> {
  completed_on?: number;
  description?: string;
  due_on?: number;
  id: number;
  is_completed: boolean;
  is_started: boolean;
  milestones?: Milestone[];
  name: string;
  parent_id?: number;
  project_id: number;
  refs?: string;
  start_on?: number;
  started_on?: number;
  url: string;
}
