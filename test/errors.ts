import { describe, it } from 'node:test';
import { TestRailException } from '../src/TestRailException.ts';
import { api, BAD_REQUEST, OK, on, TO_MANY_REQUEST } from './_helper.ts';

describe('Errors', () => {
  const success = { success: true };
  const customError = 'Custom error message';
  const defaultError = 'No additional error message received';

  it('error with message', async () => {
    on('get_current_user')
      .reply(BAD_REQUEST, { error: customError });

    await api
      .getCurrentUser()
      .should.be.rejectedWith(TestRailException, customError);
  });

  it('error without message', async () => {
    on('get_current_user')
      .reply(BAD_REQUEST);

    await api
      .getCurrentUser()
      .should.be.rejectedWith(TestRailException, defaultError);
  });

  it('429 Too Many Requests - with `Retry-After` header', async () => {
    on('get_current_user')
      .reply(TO_MANY_REQUEST, '', { 'Retry-After': '1' });
    on('get_current_user')
      .reply(OK, success);

    await api
      .getCurrentUser()
      .should.eventually.be.deep.equal(success);
  });

  it('429 Too Many Requests - without `Retry-After` header', async () => {
    on('get_current_user')
      .reply(TO_MANY_REQUEST);
    on('get_current_user')
      .reply(OK, success);

    await api
      .getCurrentUser()
      .should.eventually.be.deep.equal(success);
  });
});
