import type { AddResult } from './AddResult.ts';

export type AddResultForTest = AddResult & {
  test_id?: number | undefined;
};
