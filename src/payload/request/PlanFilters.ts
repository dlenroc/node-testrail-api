import type { Pagination } from './Pagination.ts';

export type PlanFilters = Pagination &
  Record<string, unknown> & {
    created_after?: number | undefined;
    created_before?: number | undefined;
    created_by?: number | number[] | undefined;
    is_completed?: boolean | undefined;
    milestone_id?: number | number[] | undefined;
  };
