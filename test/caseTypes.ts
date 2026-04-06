import { describe, it } from 'node:test';
import type { CaseType } from '../src/TestRail.ts';
import { api, jsonFor, OK, on } from './_helper.ts';

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
