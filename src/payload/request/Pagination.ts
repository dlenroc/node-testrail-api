export type Pagination = Record<string, unknown> & {
  limit?: number | undefined;
  offset?: number | undefined;
};
