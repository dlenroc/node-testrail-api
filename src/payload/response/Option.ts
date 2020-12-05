export interface Option extends Record<string, unknown> {
  default_value?: string;
  format?: string;
  has_actual?: boolean;
  has_expected?: boolean;
  is_required: boolean;
  items?: string;
  rows?: string;
}
