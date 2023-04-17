import { faker } from '@faker-js/faker';
import type { Report, ReportUrls } from '..';
import { OK, api, jsonFor, on } from './_helper';

describe('Reports', () => {
  const projectId = faker.datatype.number();
  const reportTemplateId = faker.datatype.number();
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
