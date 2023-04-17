import type { TestRailCtx } from '../TestRailCtx';
import { pagination } from '../internal/pagination';
import { _api } from '../internal/request';
import type { AddSection, MoveSection, Section, SectionFilters, UpdateSection } from '../payload';

export function getSection(ctx: TestRailCtx, sectionId: number): Promise<Section> {
  return _api(ctx, 'GET', `get_section/${sectionId}`);
}

export function getSections(ctx: TestRailCtx, projectId: number, filters?: SectionFilters): Promise<Section[]> {
  return pagination('sections', filters, (filters) => {
    return _api(ctx, 'GET', `get_sections/${projectId}`, { query: filters });
  });
}

export function addSection(ctx: TestRailCtx, projectId: number, payload: AddSection): Promise<Section> {
  return _api(ctx, 'POST', `add_section/${projectId}`, { json: payload });
}

export function moveSection(ctx: TestRailCtx, sectionId: number, payload: MoveSection): Promise<Section> {
  return _api(ctx, 'POST', `move_section/${sectionId}`, { json: payload });
}

export function updateSection(ctx: TestRailCtx, sectionId: number, payload: UpdateSection): Promise<Section> {
  return _api(ctx, 'POST', `update_section/${sectionId}`, { json: payload });
}

export function deleteSection(ctx: TestRailCtx, sectionId: number): Promise<void> {
  return _api(ctx, 'POST', `delete_section/${sectionId}`);
}
