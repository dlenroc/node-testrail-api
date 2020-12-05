export interface CaseType extends Record<string, unknown> {
  id: number;
  is_default: boolean;
  name: string;
}
