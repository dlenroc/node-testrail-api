import type { AddMilestone } from './AddMilestone.ts';

export type UpdateMilestone = AddMilestone & {
  is_completed?: boolean | undefined;
  is_started?: boolean | undefined;
};
