import type { PlanEntryRun } from './PlanEntryRun.ts';

export interface PlanEntry extends Record<string, unknown> {
  description?: string;
  id: string;
  include_all: boolean;
  name: string;
  refs?: string;
  runs: PlanEntryRun[];
  suite_id: number;
}
