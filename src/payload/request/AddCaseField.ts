export interface AddCaseField extends Record<string, unknown> {
  type?: string;
  name?: string;
  label?: string;
  description?: string;
  include_all?: boolean;
  template_ids?: number[];
  configs?: AddCaseField.CaseFieldConfig[];
}

export namespace AddCaseField {
  export interface CaseFieldConfig extends Record<string, unknown> {
    context?: Context;
    options?: Options;
  }

  export interface Context extends Record<string, unknown> {
    is_global?: boolean;
    project_ids?: number[];
  }

  export interface Options extends Record<string, unknown> {
    default_value?: string;
    format?: string;
    has_actual?: boolean;
    has_expected?: boolean;
    is_required?: boolean;
    items?: string;
    rows?: string;
  }
}
