import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Case Types', async () => {
  const caseType: Model.CaseType = await jsonFor('CaseType');
  const caseTypes = [caseType];

  it('get case types', async () => {
    on('get_case_types')
      .reply(OK, caseTypes);

    await api
      .getCaseTypes()
      .should.eventually.be.deep.equal(caseTypes);
  });
});
