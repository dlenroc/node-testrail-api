import type { AddResultForCase } from './AddResultForCase.ts';

export type AddResultsForCases = Record<string, unknown> & {
  results?: AddResultForCase[] | undefined;
};
