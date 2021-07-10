import { datatype } from 'faker';
import { AddProject, Project, ProjectFilters, UpdateProject } from '..';
import { api, jsonFor, OK, on, qs } from './_helper';

describe('Projects', () => {
  const projectId = datatype.number();
  const project: Project = jsonFor('Project');
  const projects = [project];
  const projectFilters: ProjectFilters = jsonFor('ProjectFilters');
  const addProjectPayload: AddProject = jsonFor('AddProject');
  const updateProjectPayload: UpdateProject = jsonFor('UpdateProject');

  it('get project', async () => {
    on(`get_project/${projectId}`)
      .reply(OK, project);

    await api
      .getProject(projectId)
      .should.eventually.be.deep.equal(project);
  });

  it('get projects', async () => {
    on('get_projects&limit=250&offset=0')
      .reply(OK, projects);

    await api
      .getProjects()
      .should.eventually.be.deep.equal(projects);
  });

  it('get filtered projects', async () => {
    on(`get_projects&${qs(projectFilters)}&limit=250&offset=0`)
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
