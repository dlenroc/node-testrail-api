import { AddResultForTest } from './AddResultForTest';

export interface AddResults extends Record<string, unknown> {
  results?: AddResultForTest[];
}
