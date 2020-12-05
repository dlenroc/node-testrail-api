export interface Context extends Record<string, unknown> {
  is_global: boolean;
  project_ids?: number[];
}
