import type { Pagination } from './Pagination.ts';

export type ResultFilters = Pagination &
  Record<string, unknown> & {
    defects?: string | undefined;
    status_id?: number | number[] | undefined;
  };
