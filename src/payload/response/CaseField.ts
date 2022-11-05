import type { Context } from './Context';

export interface CaseField extends Record<string, unknown> {
  configs: CaseField.CaseFieldConfig[];
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

export namespace CaseField {
  export interface CaseFieldConfig extends Record<string, unknown> {
    context: Context;
    id: string;
    options: Options;
  }

  export interface Options {
    default_value?: string;
    format?: string;
    has_actual?: boolean;
    has_expected?: boolean;
    is_required: boolean;
    items?: string;
    rows?: string;
  }
}
