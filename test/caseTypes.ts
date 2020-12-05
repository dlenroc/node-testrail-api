import { CaseType } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Case Types', () => {
  const caseType: CaseType = jsonFor('CaseType');
  const caseTypes = [caseType];

  it('get case types', async () => {
    on('get_case_types')
      .reply(OK, caseTypes);

    await api
      .getCaseTypes()
      .should.eventually.be.deep.equal(caseTypes);
  });
});
