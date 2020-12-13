import { Pagination } from './Pagination';

export interface TestFilters extends Pagination, Record<string, unknown> {
  status_id?: number | number[];
}
