import type { Role } from '..';
import { api, jsonFor, OK, on } from './_helper';

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
