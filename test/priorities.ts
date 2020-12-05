import { Priority } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Priorities', () => {
  const priority: Priority = jsonFor('Priority');
  const priorities = [priority];

  it('get priorities', async () => {
    on('get_priorities')
      .reply(OK, priorities);

    await api
      .getPriorities()
      .should.eventually.be.deep.equal(priorities);
  });
});
