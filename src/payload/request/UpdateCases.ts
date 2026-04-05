import type { UpdateCase } from './UpdateCase.ts';

export type UpdateCases = UpdateCase & {
  case_ids?: number[] | undefined;
};
