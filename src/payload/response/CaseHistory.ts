import type { Option } from './Option';

export interface CaseHistory extends Record<string, unknown> {
  changes: CaseHistory.Change[];
  created_on: number;
  id?: number;
  type_id: number;
  user_id: number;
}

export namespace CaseHistory {
  export interface Change extends Record<string, unknown> {
    field: string;
    label?: string;
    new_text?: string;
    new_value?: string | number | number[];
    old_ignore?: boolean;
    old_text?: string;
    old_value?: string | number | number[];
    options?: Option;
    type_id: number;
  }
}
