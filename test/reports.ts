import { random } from 'faker';
import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Reports', async () => {
  const projectId = random.number();
  const reportTemplateId = random.number();
  const report: Model.Report = await jsonFor('Report');
  const reports = [report];
  const reportUrls: Model.ReportUrls = await jsonFor('ReportUrls');

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
