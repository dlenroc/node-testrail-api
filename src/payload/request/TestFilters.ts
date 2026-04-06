import type { Pagination } from './Pagination.ts';

export type TestFilters = Pagination &
  Record<string, unknown> & {
    status_id?: number | number[] | undefined;
  };
