import { AddPlanEntry } from './AddPlanEntry';
import { UpdatePlan } from './UpdatePlan';

export interface AddPlan extends UpdatePlan {
  entries?: AddPlanEntry[];
}
