import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { AddSection, Section, SectionFilters, UpdateSection } from '../src/TestRail.ts';
import { OK, api, jsonFor, on, qs } from './_helper.ts';

describe('Sections', () => {
  const sectionId = faker.number.int();
  const projectId = faker.number.int();
  const section: Section = jsonFor('Section');
  const sections = [section];
  const sectionFilters: SectionFilters = jsonFor('SectionFilters');
  const addSectionPayload: AddSection = jsonFor('AddSection');
  const updateSectionPayload: UpdateSection = jsonFor('UpdateSection');

  it('get section', async () => {
    on(`get_section/${sectionId}`)
      .reply(OK, section);

    await api
      .getSection(sectionId)
      .should.eventually.be.deep.equal(section);
  });

  it('get sections', async () => {
    on(`get_sections/${projectId}&limit=250&offset=0`)
      .reply(200, sections);

    await api
      .getSections(projectId)
      .should.eventually.be.deep.equal(sections);
  });

  it('get filtered sections', async () => {
    on(`get_sections/${projectId}&${qs(sectionFilters)}&limit=250&offset=0`)
      .reply(OK, sections);

    await api
      .getSections(projectId, sectionFilters)
      .should.eventually.be.deep.equal(sections);
  });

  it('add section', async () => {
    on(`add_section/${projectId}`, addSectionPayload)
      .reply(OK, section);

    await api
      .addSection(projectId, addSectionPayload)
      .should.eventually.be.deep.equal(section);
  });

  it('update section', async () => {
    on(`update_section/${sectionId}`, updateSectionPayload)
      .reply(OK, section);

    await api
      .updateSection(sectionId, updateSectionPayload)
      .should.eventually.be.deep.equal(section);
  });

  it('delete section', async () => {
    on(`delete_section/${sectionId}`)
      .reply(OK);

    await api
      .deleteSection(sectionId)
      .should.be.fulfilled;
  });
});
