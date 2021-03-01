export interface UpdateSharedStep extends Record<string, unknown> {
  title?: string;
  custom_steps_separated?: {
    content?: string;
    expected?: string;
  }[];
}
