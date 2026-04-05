import type { AddResult } from './AddResult.ts';

export type AddResultForCase = AddResult & {
  case_id?: number | undefined;
};
