import type { Pagination } from './Pagination.ts';

export type CaseFilters = Pagination &
  Record<string, unknown> & {
    suite_id?: number | undefined;
    created_after?: number | undefined;
    created_before?: number | undefined;
    created_by?: number | number[] | undefined;
    filter?: string | undefined;
    milestone_id?: number | number[] | undefined;
    priority_id?: number | number[] | undefined;
    refs?: string | undefined;
    section_id?: number | undefined;
    template_id?: number | number[] | undefined;
    type_id?: number | number[] | undefined;
    updated_after?: number | undefined;
    updated_before?: number | undefined;
    updated_by?: number | number[] | undefined;
  };
