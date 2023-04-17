import { faker } from '@faker-js/faker';
import type { AddGroup, Group } from '..';
import { OK, api, jsonFor, on } from './_helper';

describe('Groups', () => {
  const groupId = faker.datatype.number();
  const group: Group = jsonFor('Group');
  const groups: Group[] = [group];
  const addOrUpdateGroupPayload: AddGroup = jsonFor('AddGroup');

  it('get group', async () => {
    on(`get_group/${groupId}`)
      .reply(OK, group);

    await api
      .getGroup(groupId)
      .should.eventually.be.deep.equal(group);
  });

  it('get groups', async () => {
    on('get_groups&limit=250&offset=0')
      .reply(OK, groups);

    await api
      .getGroups()
      .should.eventually.be.deep.equal(groups);
  });

  it('add group', async () => {
    on('add_group', addOrUpdateGroupPayload)
      .reply(OK, group);

    await api
      .addGroup(addOrUpdateGroupPayload)
      .should.eventually.be.deep.equal(group);
  });

  it('update group', async () => {
    on(`update_group/${groupId}`, addOrUpdateGroupPayload)
      .reply(OK, group);

    await api
      .updateGroup(groupId, addOrUpdateGroupPayload)
      .should.eventually.be.deep.equal(group);
  });

  it('delete group', async () => {
    on(`delete_group/${groupId}`)
      .reply(OK);

    await api
      .deleteGroup(groupId)
      .should.be.fulfilled;
  });
});
