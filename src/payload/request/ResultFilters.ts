import type { Pagination } from './Pagination';

export interface ResultFilters extends Pagination, Record<string, unknown> {
  defects?: string;
  status_id?: number | number[];
}
