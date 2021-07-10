import { datatype } from 'faker';
import { Report, ReportUrls } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Reports', () => {
  const projectId = datatype.number();
  const reportTemplateId = datatype.number();
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
