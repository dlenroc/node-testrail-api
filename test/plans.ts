import { datatype } from 'faker';
import { AddPlan, AddPlanEntry, AddRunToPlanEntry, Plan, PlanEntry, PlanFilters, PlanItem, UpdatePlan, UpdatePlanEntry, UpdateRunInPlanEntry } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Plans', () => {
  const planId = datatype.number();
  const projectId = datatype.number();
  const entryId = datatype.uuid();
  const runId = datatype.number();
  const plan: Plan = jsonFor('Plan');
  const planItem: PlanItem = jsonFor('PlanItem');
  const plans = [planItem];
  const planEntry: PlanEntry = jsonFor('PlanEntry');
  const planFilters: PlanFilters = jsonFor('PlanFilters');
  const addPlanPayload: AddPlan = jsonFor('AddPlan');
  const addPlanEntryPayload: AddPlanEntry = jsonFor('AddPlanEntry');
  const addRunToPlanEntry: AddRunToPlanEntry = jsonFor('AddRunToPlanEntry');
  const updatePlanPayload: UpdatePlan = jsonFor('UpdatePlan');
  const updatePlanEntryPayload: UpdatePlanEntry = jsonFor('UpdatePlanEntry');
  const updateRunInPlanEntry: UpdateRunInPlanEntry = jsonFor('UpdateRunInPlanEntry');

  it('get plan', async () => {
    on(`get_plan/${planId}`)
      .reply(OK, plan);

    await api
      .getPlan(planId)
      .should.eventually.be.deep.equal(plan);
  });

  it('get plans', async () => {
    on(`get_plans/${projectId}&limit=250&offset=0`)
      .reply(OK, plans);

    await api
      .getPlans(projectId)
      .should.eventually.be.deep.equal(plans);
  });

  it('get filtered plans', async () => {
    on(`get_plans/${projectId}&${qs(planFilters)}&limit=250&offset=0`)
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
    on(`update_run_in_plan_entry/${runId}`, updateRunInPlanEntry)
      .reply(OK, planEntry);

    await api
      .updateRunInPlanEntry(runId, updateRunInPlanEntry)
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
