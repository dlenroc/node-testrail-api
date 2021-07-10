import { datatype } from 'faker';
import { Template } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Templates', () => {
  const templateId = datatype.number();
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
