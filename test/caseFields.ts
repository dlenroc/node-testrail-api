import { Model, Payload } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Case Fields', async () => {
  const caseField: Model.CaseField = await jsonFor('CaseField');
  const caseFields = [caseField];
  const addCaseFieldPayload: Payload.AddCaseField = await jsonFor('AddCaseField');

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
