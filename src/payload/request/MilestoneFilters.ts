export interface MilestoneFilters extends Record<string, unknown> {
  is_completed?: boolean;
  is_started?: boolean;
}
