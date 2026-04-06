import type { Pagination } from './Pagination.ts';

export type MilestoneFilters = Pagination &
  Record<string, unknown> & {
    is_completed?: boolean | undefined;
    is_started?: boolean | undefined;
  };
