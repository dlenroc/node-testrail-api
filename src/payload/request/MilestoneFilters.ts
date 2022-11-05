import type { Pagination } from './Pagination';

export interface MilestoneFilters extends Pagination, Record<string, unknown> {
  is_completed?: boolean;
  is_started?: boolean;
}
