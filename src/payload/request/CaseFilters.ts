import type { Pagination } from './Pagination';

export interface CaseFilters extends Pagination, Record<string, unknown> {
  suite_id?: number;
  created_after?: number;
  created_before?: number;
  created_by?: number | number[];
  filter?: string;
  milestone_id?: number | number[];
  priority_id?: number | number[];
  refs?: string;
  section_id?: number;
  template_id?: number | number[];
  type_id?: number | number[];
  updated_after?: number;
  updated_before?: number;
  updated_by?: number | number[];
}
