import { datatype } from 'faker';
import { AddCase, Case, CaseFilters, CaseHistory, DeleteCases, UpdateCase, UpdateCases } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Cases', () => {
  const caseId = datatype.number();
  const projectId = datatype.number();
  const sectionId = datatype.number();
  const suiteId = datatype.number();
  const testCase: Case = jsonFor('Case');
  const testCases = [testCase];
  const caseFilters: CaseFilters = jsonFor('CaseFilters');
  const caseHistory: CaseHistory = jsonFor('CaseHistory');
  const caseHistories = [caseHistory];
  const addCasePayload: AddCase = jsonFor('AddCase');
  const updateCasePayload: UpdateCase = jsonFor('UpdateCase');
  const updateCasesPayload: UpdateCases = jsonFor('UpdateCases');
  const deleteCasesPayload: DeleteCases = jsonFor('DeleteCases');

  it('get case', async () => {
    on(`get_case/${caseId}`)
      .reply(OK, testCase);

    await api
      .getCase(caseId)
      .should.eventually.be.deep.equal(testCase);
  });

  it('get cases', async () => {
    on(`get_cases/${projectId}&limit=250&offset=0`)
      .reply(OK, testCases);

    await api
      .getCases(projectId)
      .should.eventually.be.deep.equal(testCases);
  });

  it('get filtered cases', async () => {
    on(`get_cases/${projectId}&${qs(caseFilters)}&limit=250&offset=0`)
      .reply(OK, testCases);

    await api
      .getCases(projectId, caseFilters)
      .should.eventually.be.deep.equal(testCases);
  });

  it('get history for case', async () => {
    on(`get_history_for_case/${caseId}&limit=250&offset=0`)
      .reply(OK, caseHistories);

    await api
      .getHistoryForCase(caseId)
      .should.eventually.be.deep.equal(caseHistories);
  });

  it('add case', async () => {
    on(`add_case/${sectionId}`, addCasePayload)
      .reply(OK, testCase);

    await api
      .addCase(sectionId, addCasePayload)
      .should.eventually.be.deep.equal(testCase);
  });

  it('update case', async () => {
    on(`update_case/${caseId}`, updateCasePayload)
      .reply(OK, testCase);

    await api
      .updateCase(caseId, updateCasePayload)
      .should.eventually.be.deep.equal(testCase);
  });

  it('update cases', async () => {
    on(`update_cases/${suiteId}`, updateCasesPayload)
      .reply(OK, testCases);

    await api
      .updateCases(suiteId, updateCasesPayload)
      .should.eventually.be.deep.equal(testCases);
  });

  it('delete case', async () => {
    on(`delete_case/${caseId}`)
      .reply(OK);

    await api
      .deleteCase(caseId)
      .should.be.fulfilled;
  });

  it('delete cases', async () => {
    on(`delete_cases/${projectId}`)
      .reply(OK);

    await api
      .deleteCases(projectId, deleteCasesPayload)
      .should.be.fulfilled;
  });
});
