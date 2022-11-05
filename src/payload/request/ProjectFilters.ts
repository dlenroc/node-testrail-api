import type { Pagination } from './Pagination';

export interface ProjectFilters extends Pagination, Record<string, unknown> {
  is_completed?: boolean;
}
