export interface Pagination extends Record<string, unknown> {
  limit?: number;
  offset?: number;
}
