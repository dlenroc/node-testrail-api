export interface CaseStatus extends Record<string, unknown> {
  id: number;
  name: string;
  abbreviation: string;
  is_default: boolean;
  is_approved: boolean;
}
