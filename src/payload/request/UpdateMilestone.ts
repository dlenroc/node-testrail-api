import type { AddMilestone } from './AddMilestone';

export interface UpdateMilestone extends AddMilestone {
  is_completed?: boolean;
  is_started?: boolean;
}
