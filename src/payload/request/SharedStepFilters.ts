import type { Pagination } from './Pagination.ts';

export type SharedStepFilters = Pagination &
  Record<string, unknown> & {
    created_after?: number | undefined;
    created_before?: number | undefined;
    created_by?: number | number[] | undefined;
    updated_after?: number | undefined;
    updated_before?: number | undefined;
    refs?: string | undefined;
  };
