import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddDataset, Dataset, Group, Pagination } from '../payload';

export function getDataset(ctx: TestRailCtx, datasetId: number): Promise<Dataset> {
  return _api(ctx, 'GET', `get_dataset/${datasetId}`);
}

export function getDatasets(ctx: TestRailCtx, projectId: number, filters?: Pagination): Promise<Dataset[]> {
  return pagination('datasets', filters, (filters) => {
    return _api(ctx, 'GET', `get_datasets/${projectId}`, { query: filters });
  });
}

export function addDataset(ctx: TestRailCtx, projectId: number, payload: AddDataset): Promise<Group> {
  return _api(ctx, 'POST', `add_dataset/${projectId}`, { json: payload });
}

export function updateDataset(ctx: TestRailCtx, datasetId: number, payload: AddDataset): Promise<Group> {
  return _api(ctx, 'POST', `update_dataset/${datasetId}`, { json: payload });
}

export function deleteDataset(ctx: TestRailCtx, datasetId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_dataset/${datasetId}`);
}
