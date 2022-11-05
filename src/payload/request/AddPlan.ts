import type { AddPlanEntry } from './AddPlanEntry';
import type { UpdatePlan } from './UpdatePlan';

export interface AddPlan extends UpdatePlan {
  entries?: AddPlanEntry[];
}
