import type { Pagination } from './Pagination.ts';

export type ProjectFilters = Pagination &
  Record<string, unknown> & {
    is_completed?: boolean | undefined;
  };
