import type { Context } from './Context';
import type { Option } from './Option';

export interface FieldConfig extends Record<string, unknown> {
  context: Context;
  id: string;
  options: Option;
}
