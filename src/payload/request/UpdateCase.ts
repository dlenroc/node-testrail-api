import type { AddCase } from './AddCase.ts';

export type UpdateCase = AddCase & {
  section_id?: number | undefined;
};
