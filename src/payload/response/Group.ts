export interface Group extends Record<string, unknown> {
  id: number;
  name: string;
  user_ids: number[];
}
