import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { AddVariable, Variable } from '../src/TestRail.ts';
import { OK, api, jsonFor, on } from './_helper.ts';

describe('Variables', () => {
  const projectId = faker.number.int();
  const variableId = faker.number.int();
  const variable: Variable = jsonFor('Variable');
  const variables: Variable[] = [variable];
  const addOrUpdateVariablePayload: AddVariable = jsonFor('AddVariable');

  it('get variables', async () => {
    on(`get_variables/${projectId}&limit=250&offset=0`)
      .reply(OK, variables);

    await api
      .getVariables(projectId)
      .should.eventually.be.deep.equal(variables);
  });

  it('add variable', async () => {
    on(`add_variable/${projectId}`, addOrUpdateVariablePayload)
      .reply(OK, variable);

    await api
      .addVariable(projectId, addOrUpdateVariablePayload)
      .should.eventually.be.deep.equal(variable);
  });

  it('update variable', async () => {
    on(`update_variable/${variableId}`, addOrUpdateVariablePayload)
      .reply(OK, variable);

    await api
      .updateVariable(variableId, addOrUpdateVariablePayload)
      .should.eventually.be.deep.equal(variable);
  });

  it('delete variable', async () => {
    on(`delete_variable/${variableId}`)
      .reply(OK);

    await api
      .deleteVariable(variableId)
      .should.be.fulfilled;
  });
});
