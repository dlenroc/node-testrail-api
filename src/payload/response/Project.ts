export interface Project extends Record<string, unknown> {
  announcement?: string;
  completed_on?: number;
  id: number;
  is_completed: boolean;
  name: string;
  show_announcement: boolean;
  suite_mode: number;
  url: string;
}
