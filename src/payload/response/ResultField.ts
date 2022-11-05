import type { FieldConfig } from './FieldConfig';

export interface ResultField extends Record<string, unknown> {
  configs: FieldConfig[];
  description?: string;
  display_order: number;
  id: number;
  include_all: boolean;
  is_active: boolean;
  label: string;
  name: string;
  system_name: string;
  template_ids: number[];
  type_id: number;
}
