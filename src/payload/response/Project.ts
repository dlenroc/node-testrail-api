export interface Project extends Record<string, unknown> {
  announcement?: string;
  completed_on?: number;
  default_role_id?: number;
  id: number;
  is_completed: boolean;
  name: string;
  show_announcement: boolean;
  suite_mode: number;
  url: string;
  groups: {
    id: number;
    role: string;
    role_id: number;
  }[];
  users: {
    id: number;
    global_role_id: number;
    global_role: string;
    project_role_id: number;
    project_role: string;
  }[];
}
