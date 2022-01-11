import { CaseStatus, Status } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Statuses', () => {
  const status: Status = jsonFor('Status');
  const statuses = [status];
  const caseStatus: CaseStatus = jsonFor('CaseStatus');
  const caseStatuses = [caseStatus];

  it('get statuses', async () => {
    on('get_statuses')
      .reply(OK, statuses);

    await api
      .getStatuses()
      .should.eventually.be.deep.equal(statuses);
  });

  it('get case statuses', async () => {
    on('get_case_statuses&limit=250&offset=0')
      .reply(OK, caseStatuses);

    await api
      .getCaseStatuses()
      .should.eventually.be.deep.equal(caseStatuses);
  });
});
