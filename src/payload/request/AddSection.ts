import type { UpdateSection } from './UpdateSection.ts';

export type AddSection = UpdateSection & {
  parent_id?: number | undefined;
  suite_id?: number | undefined;
};
