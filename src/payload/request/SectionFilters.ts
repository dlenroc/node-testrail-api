import type { Pagination } from './Pagination';

export interface SectionFilters extends Pagination, Record<string, unknown> {
  suite_id?: number;
}
