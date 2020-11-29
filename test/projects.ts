import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Projects', async () => {
  const projectId = random.number();
  const project: Model.Project = await jsonFor('Project');
  const projects = [project];
  const projectFilters: Payload.ProjectFilters = await jsonFor('ProjectFilters');
  const addProjectPayload: Payload.AddProject = await jsonFor('AddProject');
  const updateProjectPayload: Payload.UpdateProject = await jsonFor('UpdateProject');

  it('get project', async () => {
    on(`get_project/${projectId}`)
      .reply(OK, project);

    await api
      .getProject(projectId)
      .should.eventually.be.deep.equal(project);
  });

  it('get projects', async () => {
    on('get_projects')
      .reply(OK, projects);

    await api
      .getProjects()
      .should.eventually.be.deep.equal(projects);
  });

  it('get filtered projects', async () => {
    on(`get_projects&${qs(projectFilters)}`)
      .reply(OK, projects);

    await api
      .getProjects(projectFilters)
      .should.eventually.be.deep.equal(projects);
  });

  it('add project', async () => {
    on('add_project', addProjectPayload)
      .reply(OK, project);

    await api
      .addProject(addProjectPayload)
      .should.eventually.be.deep.equal(project);
  });

  it('update project', async () => {
    on(`update_project/${projectId}`, updateProjectPayload)
      .reply(OK, project);

    await api
      .updateProject(projectId, updateProjectPayload)
      .should.eventually.be.deep.equal(project);
  });

  it('delete project', async () => {
    on(`delete_project/${projectId}`)
      .reply(OK);

    await api
      .deleteProject(projectId)
      .should.be.fulfilled;
  });
});
