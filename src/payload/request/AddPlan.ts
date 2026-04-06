import type { AddPlanEntry } from './AddPlanEntry.ts';
import type { UpdatePlan } from './UpdatePlan.ts';

export type AddPlan = UpdatePlan & {
  entries?: AddPlanEntry[] | undefined;
};
