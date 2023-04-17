import { faker } from '@faker-js/faker';
import type { AddUser, User, UserFilters } from '..';
import { OK, api, jsonFor, on, qs } from './_helper';

describe('Users', () => {
  const userId = faker.datatype.number();
  const email = faker.internet.email();
  const user: User = jsonFor('User');
  const users: User[] = [user];
  const userFilters: UserFilters = jsonFor('UserFilters');
  const addOrUpdateUserPayload: AddUser = jsonFor('AddUser');

  it('get user', async () => {
    on(`get_user/${userId}`)
      .reply(OK, user);

    await api
      .getUser(userId)
      .should.eventually.be.deep.equal(user);
  });

  it('get current user', async () => {
    on('get_current_user')
      .reply(OK, user);

    await api
      .getCurrentUser()
      .should.eventually.be.deep.equal(user);
  });

  it('get user by email', async () => {
    on(`get_user_by_email&email=${email}`)
      .reply(OK, user);

    await api
      .getUserByEmail(email)
      .should.eventually.be.deep.equal(user);
  });

  it('get users', async () => {
    on('get_users')
      .reply(OK, users);

    await api
      .getUsers()
      .should.eventually.be.deep.equal(users);
  });

  it('get filtered users', async () => {
    on(`get_users&${qs(userFilters)}`)
      .reply(OK, users);

    await api
      .getUsers(userFilters)
      .should.eventually.be.deep.equal(users);
  });

  it('add user', async () => {
    on('add_user', addOrUpdateUserPayload)
      .reply(OK, user);

    await api
      .addUser(addOrUpdateUserPayload)
      .should.eventually.be.deep.equal(user);
  });

  it('update user', async () => {
    on(`update_user/${userId}`, addOrUpdateUserPayload)
      .reply(OK, user);

    await api
      .updateUser(userId, addOrUpdateUserPayload)
      .should.eventually.be.deep.equal(user);
  });
});
