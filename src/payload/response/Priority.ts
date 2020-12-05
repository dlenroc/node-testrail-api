export interface Priority extends Record<string, unknown> {
  id: number;
  is_default: boolean;
  name: string;
  priority: number;
  short_name: string;
}
