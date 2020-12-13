import { Pagination } from './Pagination';

export interface RunFilters extends Pagination, Record<string, unknown> {
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  is_completed?: boolean;
  milestone_id?: number | number[];
  refs?: string;
  suite_id?: number | number[];
}
