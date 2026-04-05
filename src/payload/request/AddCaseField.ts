export type AddCaseField = Record<string, unknown> & {
  type?: string | undefined;
  name?: string | undefined;
  label?: string | undefined;
  description?: string | undefined;
  include_all?: boolean | undefined;
  template_ids?: number[] | undefined;
  configs?: AddCaseField.CaseFieldConfig[] | undefined;
};

export namespace AddCaseField {
  export type CaseFieldConfig = Record<string, unknown> & {
    context?: Context | undefined;
    options?: Options | undefined;
  };

  export type Context = Record<string, unknown> & {
    is_global?: boolean | undefined;
    project_ids?: number[] | undefined;
  };

  export type Options = Record<string, unknown> & {
    default_value?: string | undefined;
    format?: string | undefined;
    has_actual?: boolean | undefined;
    has_expected?: boolean | undefined;
    is_required?: boolean | undefined;
    items?: string | undefined;
    rows?: string | undefined;
  };
}
