import { datatype } from 'faker';
import { AddMilestone, Milestone, MilestoneFilters, UpdateMilestone } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Milestones', () => {
  const milestoneId = datatype.number();
  const projectId = datatype.number();
  const milestone: Milestone = jsonFor('Milestone');
  const milestones = [milestone];
  const milestoneFilters: MilestoneFilters = jsonFor('MilestoneFilters');
  const addMilestonePayload: AddMilestone = jsonFor('AddMilestone');
  const updateMilestonePayload: UpdateMilestone = jsonFor('UpdateMilestone');

  it('get milestone', async () => {
    on(`get_milestone/${milestoneId}`)
      .reply(OK, milestone);

    await api
      .getMilestone(milestoneId)
      .should.eventually.be.deep.equal(milestone);
  });

  it('get milestones', async () => {
    on(`get_milestones/${projectId}&limit=250&offset=0`)
      .reply(OK, milestones);

    await api
      .getMilestones(projectId)
      .should.eventually.be.deep.equal(milestones);
  });

  it('get filtered milestones', async () => {
    on(`get_milestones/${projectId}&${qs(milestoneFilters)}&limit=250&offset=0`)
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
