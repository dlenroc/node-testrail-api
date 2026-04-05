export type AddGroup = Record<string, unknown> & {
  name?: string | undefined;
  user_ids?: number[] | undefined;
};
