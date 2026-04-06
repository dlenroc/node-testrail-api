import type { Context } from './Context.ts';
import type { Option } from './Option.ts';

export interface FieldConfig extends Record<string, unknown> {
  context: Context;
  id: string;
  options: Option;
}
