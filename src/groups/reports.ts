import type { TestRailCtx } from '../TestRailCtx';
import { _api } from '../internal/request';
import type { Report, ReportUrls } from '../payload';

export function getReports(ctx: TestRailCtx, projectId: number): Promise<Report[]> {
  return _api(ctx, 'GET', `get_reports/${projectId}`);
}

export function runReport(ctx: TestRailCtx, reportTemplateId: number): Promise<ReportUrls> {
  return _api(ctx, 'POST', `run_report/${reportTemplateId}`);
}
