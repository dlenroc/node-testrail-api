import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Plans', async () => {
  const planId = random.number();
  const projectId = random.number();
  const entryId = random.uuid();
  const runId = random.number();
  const plan: Model.Plan = await jsonFor('Plan');
  const planItem: Model.PlanItem = await jsonFor('PlanItem');
  const plans = [planItem];
  const planEntry: Model.PlanEntry = await jsonFor('PlanEntry');
  const planFilters: Payload.PlanFilters = await jsonFor('PlanFilters');
  const addPlanPayload: Payload.AddPlan = await jsonFor('AddPlan');
  const addPlanEntryPayload: Payload.AddPlanEntry = await jsonFor('AddPlanEntry');
  const addRunToPlanEntry: Payload.AddRunToPlanEntry = await jsonFor('AddRunToPlanEntry');
  const updatePlanPayload: Payload.UpdatePlan = await jsonFor('UpdatePlan');
  const updatePlanEntryPayload: Payload.UpdatePlanEntry = await jsonFor('UpdatePlanEntry');
  const updateRunInPlanEntry: Payload.UpdateRunInPlanEntry = await jsonFor('UpdateRunInPlanEntry');

  it('get plan', async () => {
    on(`get_plan/${planId}`)
      .reply(OK, plan);

    await api
      .getPlan(planId)
      .should.eventually.be.deep.equal(plan);
  });

  it('get plans', async () => {
    on(`get_plans/${projectId}`)
      .reply(OK, plans);

    await api
      .getPlans(projectId)
      .should.eventually.be.deep.equal(plans);
  });

  it('get filtered plans', async () => {
    on(`get_plans/${projectId}&${qs(planFilters)}`)
      .reply(OK, plans);

    await api
      .getPlans(projectId, planFilters)
      .should.eventually.be.deep.equal(plans);
  });

  it('add plan', async () => {
    on(`add_plan/${projectId}`, addPlanPayload)
      .reply(OK, plan);

    await api
      .addPlan(projectId, addPlanPayload)
      .should.eventually.be.deep.equal(plan);
  });

  it('add plan entry', async () => {
    on(`add_plan_entry/${planId}`, addPlanEntryPayload)
      .reply(OK, planEntry);

    await api
      .addPlanEntry(planId, addPlanEntryPayload)
      .should.eventually.be.deep.equal(planEntry);
  });

  it('add run to plan entry', async () => {
    on(`add_run_to_plan_entry/${planId}/${entryId}`, addRunToPlanEntry)
      .reply(OK, planEntry);

    await api
      .addRunToPlanEntry(planId, entryId, addRunToPlanEntry)
      .should.eventually.be.deep.equal(planEntry);
  });

  it('update plan', async () => {
    on(`update_plan/${planId}`, updatePlanPayload)
      .reply(OK, plan);

    await api
      .updatePlan(planId, updatePlanPayload)
      .should.eventually.be.deep.equal(plan);
  });

  it('update plan entry', async () => {
    on(`update_plan_entry/${planId}/${entryId}`, updatePlanEntryPayload)
      .reply(OK, planEntry);

    await api
      .updatePlanEntry(planId, entryId, updatePlanEntryPayload)
      .should.eventually.be.deep.equal(planEntry);
  });

  it('update run in plan entry', async () => {
    on(`update_run_in_plan_entry/${planId}/${runId}`, updateRunInPlanEntry)
      .reply(OK, planEntry);

    await api
      .updateRunInPlanEntry(planId, runId, updateRunInPlanEntry)
      .should.eventually.be.deep.equal(planEntry);
  });

  it('close plan', async () => {
    on(`close_plan/${planId}`)
      .reply(OK, plan);

    await api
      .closePlan(planId)
      .should.eventually.be.deep.equal(plan);
  });

  it('delete plan', async () => {
    on(`delete_plan/${planId}`)
      .reply(OK);

    await api
      .deletePlan(planId)
      .should.be.fulfilled;
  });

  it('delete plan entry', async () => {
    on(`delete_plan_entry/${planId}/${entryId}`)
      .reply(OK);

    await api
      .deletePlanEntry(planId, entryId)
      .should.be.fulfilled;
  });

  it('delete run from plan entry', async () => {
    on(`delete_run_from_plan_entry/${runId}`)
      .reply(OK);

    await api
      .deleteRunFromPlanEntry(runId)
      .should.be.fulfilled;
  });
});
