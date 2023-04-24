import { faker } from '@faker-js/faker';
import type { AddAttachment, Case } from '../src/types';
import { OK, api, jsonFor, on } from './_helper';

describe('BDD', () => {
  const caseId = faker.datatype.number();
  const sectionId = faker.datatype.number();
  const bddFeature = faker.random.words();
  const testCase: Case = jsonFor('Case');
  const hasAttachment = /form-data; name="attachment"/m;
  const addFeaturePayload: AddAttachment = {
    name: 'bdd.feature',
    value: bddFeature,
  };

  it('get bdd', async () => {
    on(`get_bdd/${caseId}`)
      .reply(OK, bddFeature);

    const feature = await api.getBdd(caseId);
    feature.text().should.eventually.be.equal(bddFeature);
  });

  it('add bdd', async () => {
    on(`add_bdd/${sectionId}`, hasAttachment)
      .reply(OK, testCase);

    await api
      .addBdd(sectionId, addFeaturePayload)
      .should.eventually.be.deep.equal(testCase);
  });
});
