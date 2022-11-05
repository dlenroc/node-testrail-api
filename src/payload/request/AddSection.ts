import type { UpdateSection } from './UpdateSection';

export interface AddSection extends UpdateSection {
  parent_id?: number;
  suite_id?: number;
}
