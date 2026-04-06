import { describe, it } from 'node:test';
import type { Priority } from '../src/TestRail.ts';
import { api, jsonFor, OK, on } from './_helper.ts';

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
