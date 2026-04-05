import type { AddResultForTest } from './AddResultForTest.ts';

export type AddResults = Record<string, unknown> & {
  results?: AddResultForTest[] | undefined;
};
