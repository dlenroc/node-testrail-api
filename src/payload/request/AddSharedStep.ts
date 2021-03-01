export interface AddSharedStep extends Record<string, unknown> {
  title?: string;
  custom_steps_separated?: {
    content?: string;
    expected?: string;
    additional_info?: string;
    refs?: string;
  }[];
}
