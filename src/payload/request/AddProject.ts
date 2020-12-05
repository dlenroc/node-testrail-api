export interface AddProject extends Record<string, unknown> {
  name?: string;
  announcement?: string;
  show_announcement?: boolean;
  suite_mode?: number;
}
