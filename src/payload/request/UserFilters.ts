import type { Pagination } from './Pagination.ts';

export type UserFilters = Pagination &
  Record<string, unknown> & {
    project_id?: number | undefined;
  };
