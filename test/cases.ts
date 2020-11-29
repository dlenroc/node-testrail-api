import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Cases', async () => {
  const caseId = random.number();
  const projectId = random.number();
  const sectionId = random.number();
  const suiteId = random.number();
  const testCase: Model.Case = await jsonFor('Case');
  const testCases = [testCase];
  const caseFilters: Payload.CaseFilters = await jsonFor('CaseFilters');
  const caseHistory: Model.CaseHistory = await jsonFor('CaseHistory');
  const caseHistories = [caseHistory];
  const addCasePayload: Payload.AddCase = await jsonFor('AddCase');
  const updateCasePayload: Payload.UpdateCase = await jsonFor('UpdateCase');
  const updateCasesPayload: Payload.UpdateCases = await jsonFor('UpdateCases');
  const deleteCasesPayload: Payload.DeleteCases = await jsonFor('DeleteCases');

  it('get case', async () => {
    on(`get_case/${caseId}`)
      .reply(OK, testCase);

    await api
      .getCase(caseId)
      .should.eventually.be.deep.equal(testCase);
  });

  it('get cases', async () => {
    on(`get_cases/${projectId}`)
      .reply(OK, testCases);

    await api
      .getCases(projectId)
      .should.eventually.be.deep.equal(testCases);
  });

  it('get filtered cases', async () => {
    on(`get_cases/${projectId}&${qs(caseFilters)}`)
      .reply(OK, testCases);

    await api
      .getCases(projectId, caseFilters)
      .should.eventually.be.deep.equal(testCases);
  });

  it('get history for case', async () => {
    on(`get_history_for_case/${caseId}`)
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
