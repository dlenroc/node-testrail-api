import type { ConfigItem } from './ConfigItem';

export interface Config extends Record<string, unknown> {
  configs: ConfigItem[];
  id: number;
  name: string;
  project_id: number;
}
