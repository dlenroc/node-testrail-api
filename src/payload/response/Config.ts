import type { ConfigItem } from './ConfigItem.ts';

export interface Config extends Record<string, unknown> {
  configs: ConfigItem[];
  id: number;
  name: string;
  project_id: number;
}
