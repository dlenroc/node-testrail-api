import type { Variable } from './Variables.ts';

export interface Dataset extends Record<string, unknown> {
  id: number;
  name: string;
  variables: ({ value: string } & Variable)[];
}
