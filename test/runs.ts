import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { AddRun, Run, RunFilters, UpdateRun } from '../src/TestRail.ts';
import { OK, api, jsonFor, on, qs } from './_helper.ts';

describe('Runs', () => {
  const runId = faker.number.int();
  const projectId = faker.number.int();
  const run: Run = jsonFor('Run');
  const runs = [run];
  const runFilters: RunFilters = jsonFor('RunFilters');
  const addRunPayload: AddRun = jsonFor('AddRun');
  const updateRunPayload: UpdateRun = jsonFor('UpdateRun');

  it('get run', async () => {
    on(`get_run/${runId}`)
      .reply(OK, run);

    await api
      .getRun(runId)
      .should.eventually.be.deep.equal(run);
  });

  it('get runs', async () => {
    on(`get_runs/${projectId}&limit=250&offset=0`)
      .reply(OK, runs);

    await api
      .getRuns(projectId)
      .should.eventually.be.deep.equal(runs);
  });

  it('get filtered runs', async () => {
    on(`get_runs/${projectId}&${qs(runFilters)}&limit=250&offset=0`)
      .reply(OK, runs);

    await api
      .getRuns(projectId, runFilters)
      .should.eventually.be.deep.equal(runs);
  });

  it('add run', async () => {
    on(`add_run/${projectId}`, addRunPayload)
      .reply(OK, run);

    await api
      .addRun(projectId, addRunPayload)
      .should.eventually.be.deep.equal(run);
  });

  it('update run', async () => {
    on(`update_run/${runId}`, updateRunPayload)
      .reply(OK, run);

    await api
      .updateRun(runId, updateRunPayload)
      .should.eventually.be.deep.equal(run);
  });

  it('close run', async () => {
    on(`close_run/${runId}`)
      .reply(OK, run);

    await api
      .closeRun(runId)
      .should.eventually.be.deep.equal(run);
  });

  it('delete suite', async () => {
    on(`delete_run/${runId}`)
      .reply(OK);

    await api
      .deleteRun(runId)
      .should.be.fulfilled;
  });
});
