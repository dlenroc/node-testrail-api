import type { Pagination } from './Pagination';

export interface ResultForRunFilters extends Pagination, Record<string, unknown> {
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  defects?: string;
  status_id?: number | number[];
}
