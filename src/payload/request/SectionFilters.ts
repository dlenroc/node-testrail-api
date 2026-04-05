import type { Pagination } from './Pagination.ts';

export type SectionFilters = Pagination &
  Record<string, unknown> & {
    suite_id?: number | undefined;
  };
