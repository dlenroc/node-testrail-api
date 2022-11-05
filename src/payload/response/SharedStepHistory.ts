import type { SharedStep } from './SharedStep';

export interface SharedStepHistory extends Record<string, unknown> {
  custom_steps_separated: SharedStep['custom_steps_separated'];
  id: number;
  timestamp: number;
  title: string;
  user_id: number;
}
