import type { UpdateRun } from './UpdateRun';

export interface AddRun extends UpdateRun {
  suite_id?: number;
  assignedto_id?: number;
}
