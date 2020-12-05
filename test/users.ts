import { internet, random } from 'faker';
import { User, UserFilters } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Users', () => {
  const userId = random.number();
  const email = internet.email();
  const user: User = jsonFor('User');
  const users: User[] = [user];
  const userFilters: UserFilters = jsonFor('UserFilters');

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
});
