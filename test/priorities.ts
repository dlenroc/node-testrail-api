import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Priorities', async () => {
  const priority: Model.Priority = await jsonFor('Priority');
  const priorities = [priority];

  it('get priorities', async () => {
    on('get_priorities')
      .reply(OK, priorities);

    await api
      .getPriorities()
      .should.eventually.be.deep.equal(priorities);
  });
});
