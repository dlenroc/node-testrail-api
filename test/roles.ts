import { describe, it } from 'node:test';
import type { Role } from '../src/TestRail.ts';
import { api, jsonFor, OK, on } from './_helper.ts';

describe('Roles', () => {
  const role: Role = jsonFor('Role');
  const roles = [role];

  it('get roles', async () => {
    on('get_roles&limit=250&offset=0')
      .reply(OK, roles);

    await api
      .getRoles()
      .should.eventually.be.deep.equal(roles);
  });
});
