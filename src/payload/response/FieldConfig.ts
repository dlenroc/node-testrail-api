import { Context } from './Context';
import { Option } from './Option';

export interface FieldConfig extends Record<string, unknown> {
  context: Context;
  id: string;
  options: Option;
}
