import { datatype } from 'faker';
import { AddSharedStep, SharedStep, UpdateSharedStep } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Shared Steps', () => {
  const sharedStepId = datatype.number();
  const projectId = datatype.number();
  const sharedStep: SharedStep = jsonFor('SharedStep');
  const sharedSteps = [sharedStep];
  const addSharedStepPayload: AddSharedStep = jsonFor('AddSharedStep');
  const updateSharedStepPayload: UpdateSharedStep = jsonFor('UpdateSharedStep');

  it('get shared step', async () => {
    on(`get_shared_step/${sharedStepId}`)
      .reply(OK, sharedStep);

    await api
      .getSharedStep(sharedStepId)
      .should.eventually.be.deep.equal(sharedStep);
  });

  it('get shared steps', async () => {
    on(`get_shared_steps/${projectId}&limit=250&offset=0`)
      .reply(OK, sharedSteps);

    await api
      .getSharedSteps(projectId)
      .should.eventually.be.deep.equal(sharedSteps);
  });

  it('add shared step', async () => {
    on(`add_shared_step/${projectId}`, addSharedStepPayload)
      .reply(OK, sharedStep);

    await api
      .addSharedStep(projectId, addSharedStepPayload)
      .should.eventually.be.deep.equal(sharedStep);
  });

  it('update shared step', async () => {
    on(`update_shared_step/${sharedStepId}`, updateSharedStepPayload)
      .reply(OK, sharedStep);

    await api
      .updateSharedStep(sharedStepId, updateSharedStepPayload)
      .should.eventually.be.deep.equal(sharedStep);
  });

  it('delete shared step', async () => {
    on(`delete_shared_step/${sharedStepId}`)
      .reply(OK);

    await api
      .deleteSharedStep(sharedStepId)
      .should.be.fulfilled;
  });
});
