import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { Template } from '../payload';

export function getTemplates(ctx: TestRailCtx, projectId: number): Promise<Template[]> {
  return _api(ctx, 'GET', `get_templates/${projectId}`);
}
