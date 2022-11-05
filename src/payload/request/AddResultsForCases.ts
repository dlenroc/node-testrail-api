import type { AddResultForCase } from './AddResultForCase';

export interface AddResultsForCases extends Record<string, unknown> {
  results?: AddResultForCase[];
}
