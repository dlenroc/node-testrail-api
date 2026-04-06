import type { Pagination } from './Pagination.ts';

export type ResultForRunFilters = Pagination &
  Record<string, unknown> & {
    created_after?: number | undefined;
    created_before?: number | undefined;
    created_by?: number | number[] | undefined;
    defects?: string | undefined;
    status_id?: number | number[] | undefined;
  };
