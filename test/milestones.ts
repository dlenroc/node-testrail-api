import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Milestones', async () => {
  const milestoneId = random.number();
  const projectId = random.number();
  const milestone: Model.Milestone = await jsonFor('Milestone');
  const milestones = [milestone];
  const milestoneFilters: Payload.MilestoneFilters = await jsonFor('MilestoneFilters');
  const addMilestonePayload: Payload.AddMilestone = await jsonFor('AddMilestone');
  const updateMilestonePayload: Payload.UpdateMilestone = await jsonFor('UpdateMilestone');

  it('get milestone', async () => {
    on(`get_milestone/${milestoneId}`)
      .reply(OK, milestone);

    await api
      .getMilestone(milestoneId)
      .should.eventually.be.deep.equal(milestone);
  });

  it('get milestones', async () => {
    on(`get_milestones/${projectId}`)
      .reply(OK, milestones);

    await api
      .getMilestones(projectId)
      .should.eventually.be.deep.equal(milestones);
  });

  it('get filtered milestones', async () => {
    on(`get_milestones/${projectId}&${qs(milestoneFilters)}`)
      .reply(OK, milestones);

    await api
      .getMilestones(projectId, milestoneFilters)
      .should.eventually.be.deep.equal(milestones);
  });

  it('add milestone', async () => {
    on(`add_milestone/${projectId}`, addMilestonePayload)
      .reply(OK, milestone);

    await api
      .addMilestone(projectId, addMilestonePayload)
      .should.eventually.be.deep.equal(milestone);
  });

  it('update milestone', async () => {
    on(`update_milestone/${milestoneId}`, updateMilestonePayload)
      .reply(OK, milestone);

    await api
      .updateMilestone(milestoneId, updateMilestonePayload)
      .should.eventually.be.deep.equal(milestone);
  });

  it('delete milestone', async () => {
    on(`delete_milestone/${milestoneId}`)
      .reply(OK);

    await api
      .deleteMilestone(milestoneId)
      .should.be.fulfilled;
  });
});
