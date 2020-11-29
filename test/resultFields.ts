import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Result Fields', async () => {
  const field: Model.ResultField = await jsonFor('ResultField');
  const fields = [field];

  it('get result fields', async () => {
    on('get_result_fields')
      .reply(OK, fields);

    await api
      .getResultFields()
      .should.eventually.be.deep.equal(fields);
  });
});
