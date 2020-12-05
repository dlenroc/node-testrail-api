import { ResultField } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Result Fields', () => {
  const field: ResultField = jsonFor('ResultField');
  const fields = [field];

  it('get result fields', async () => {
    on('get_result_fields')
      .reply(OK, fields);

    await api
      .getResultFields()
      .should.eventually.be.deep.equal(fields);
  });
});
