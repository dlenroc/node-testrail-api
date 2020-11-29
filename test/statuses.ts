import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Statuses', async () => {
  const status: Model.Status = await jsonFor('Status');
  const statuses = [status];

  it('get statuses', async () => {
    on('get_statuses')
      .reply(OK, statuses);

    await api
      .getStatuses()
      .should.eventually.be.deep.equal(statuses);
  });
});
