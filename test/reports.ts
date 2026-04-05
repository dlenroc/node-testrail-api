import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { Report, ReportUrls } from '../src/TestRail.ts';
import { OK, api, jsonFor, on } from './_helper.ts';

describe('Reports', () => {
  const projectId = faker.number.int();
  const reportTemplateId = faker.number.int();
  const report: Report = jsonFor('Report');
  const reports = [report];
  const reportUrls: ReportUrls = jsonFor('ReportUrls');

  it('get reports', async () => {
    on(`get_reports/${projectId}`)
      .reply(OK, reports);

    await api
      .getReports(projectId)
      .should.eventually.be.deep.equal(reports);
  });

  it('run report', async () => {
    on(`run_report/${reportTemplateId}`)
      .reply(OK, reportUrls);

    await api
      .runReport(reportTemplateId)
      .should.eventually.be.deep.equal(reportUrls);
  });
});
