import type { Pagination } from "./Pagination";

export interface UserFilters extends Pagination, Record<string, unknown> {
  project_id?: number;
}
