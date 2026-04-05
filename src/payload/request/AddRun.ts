import type { UpdateRun } from './UpdateRun.ts';

export type AddRun = UpdateRun & {
  suite_id?: number | undefined;
  assignedto_id?: number | undefined;
};
