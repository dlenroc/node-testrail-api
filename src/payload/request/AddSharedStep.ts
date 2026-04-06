export type AddSharedStep = Record<string, unknown> & {
  title?: string | undefined;
  custom_steps_separated?:
    | {
        content?: string | undefined;
        expected?: string | undefined;
        additional_info?: string | undefined;
        refs?: string;
      }[]
    | undefined;
};
