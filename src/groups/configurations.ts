import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { AddConfig, AddConfigGroup, Config, ConfigItem, UpdateConfig, UpdateConfigGroup } from '../payload';

export function getConfigs(ctx: TestRailCtx, projectId: number): Promise<Config[]> {
  return _api(ctx, 'GET', `get_configs/${projectId}`);
}

export function addConfigGroup(ctx: TestRailCtx, projectId: number, payload: AddConfigGroup): Promise<Config> {
  return _api(ctx, 'POST', `add_config_group/${projectId}`, { json: payload });
}

export function addConfig(ctx: TestRailCtx, configGroupId: number, payload: AddConfig): Promise<ConfigItem> {
  return _api(ctx, 'POST', `add_config/${configGroupId}`, { json: payload });
}

export function updateConfigGroup(ctx: TestRailCtx, configGroupId: number, payload: UpdateConfigGroup): Promise<Config> {
  return _api(ctx, 'POST', `update_config_group/${configGroupId}`, { json: payload });
}

export function updateConfig(ctx: TestRailCtx, configId: number, payload: UpdateConfig): Promise<ConfigItem> {
  return _api(ctx, 'POST', `update_config/${configId}`, { json: payload });
}

export function deleteConfigGroup(ctx: TestRailCtx, configGroupId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_config_group/${configGroupId}`);
}

export function deleteConfig(ctx: TestRailCtx, configId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_config/${configId}`);
}
