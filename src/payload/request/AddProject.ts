export type AddProject = Record<string, unknown> & {
  name?: string | undefined;
  announcement?: string | undefined;
  show_announcement?: boolean | undefined;
  suite_mode?: number | undefined;
};
