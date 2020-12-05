export interface Section extends Record<string, unknown> {
  depth: number;
  description?: string;
  display_order: number;
  id: number;
  name: string;
  parent_id?: number;
  suite_id: number;
}
