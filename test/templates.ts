import { random } from 'faker';
import { Model } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Templates', async () => {
  const templateId = random.number();
  const template: Model.Template = await jsonFor('Template');
  const templates = [template];

  it('get templates', async () => {
    on(`get_templates/${templateId}`)
      .reply(OK, templates);

    await api
      .getTemplates(templateId)
      .should.eventually.be.deep.equal(templates);
  });
});
