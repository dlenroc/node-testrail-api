import { AddCaseField, CaseField } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Case Fields', () => {
  const caseField: CaseField = jsonFor('CaseField');
  const caseFields = [caseField];
  const addCaseFieldPayload: AddCaseField = jsonFor('AddCaseField');

  it('get case fields', async () => {
    on('get_case_fields')
      .reply(OK, caseFields);

    await api
      .getCaseFields()
      .should.eventually.be.deep.equal(caseFields);
  });

  it('add case field', async () => {
    on('add_case_field', addCaseFieldPayload)
      .reply(OK, caseField);

    await api
      .addCaseField(addCaseFieldPayload)
      .should.eventually.be.deep.equal(caseField);
  });
});
