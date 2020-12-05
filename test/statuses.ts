import { Status } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Statuses', () => {
  const status: Status = jsonFor('Status');
  const statuses = [status];

  it('get statuses', async () => {
    on('get_statuses')
      .reply(OK, statuses);

    await api
      .getStatuses()
      .should.eventually.be.deep.equal(statuses);
  });
});
