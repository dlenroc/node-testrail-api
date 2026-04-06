import { faker } from '@faker-js/faker';
import { describe, it } from 'node:test';
import type { Template } from '../src/TestRail.ts';
import { api, jsonFor, OK, on } from './_helper.ts';

describe('Templates', () => {
  const templateId = faker.number.int();
  const template: Template = jsonFor('Template');
  const templates = [template];

  it('get templates', async () => {
    on(`get_templates/${templateId}`)
      .reply(OK, templates);

    await api
      .getTemplates(templateId)
      .should.eventually.be.deep.equal(templates);
  });
});
