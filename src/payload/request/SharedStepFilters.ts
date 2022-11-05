import type { Pagination } from './Pagination';

export interface SharedStepFilters extends Pagination, Record<string, unknown> {
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  updated_after?: number;
  updated_before?: number;
  refs?: string;
}
