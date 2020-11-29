import { random } from 'faker';
import { Model, Payload } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Configurations', async () => {
  const projectId = random.number();
  const configGroupId = random.number();
  const configId = random.number();
  const config: Model.Config = await jsonFor('Config');
  const configItem: Model.ConfigItem = await jsonFor('ConfigItem');
  const configs = [config];
  const addConfigGroupPayload: Payload.AddConfigGroup = await jsonFor('AddConfigGroup');
  const addConfigPayload: Payload.AddConfig = await jsonFor('AddConfig');
  const updateConfigGroupPayload: Payload.UpdateConfigGroup = await jsonFor('UpdateConfigGroup');
  const updateConfigPayload: Payload.UpdateConfig = await jsonFor('UpdateConfig');

  it('get config', async () => {
    on(`get_configs/${projectId}`)
      .reply(OK, configs);

    await api
      .getConfigs(projectId)
      .should.eventually.be.deep.equal(configs);
  });

  it('add config group', async () => {
    on(`add_config_group/${projectId}`, addConfigGroupPayload)
      .reply(OK, config);

    await api
      .addConfigGroup(projectId, addConfigGroupPayload)
      .should.eventually.be.deep.equal(config);
  });

  it('add config', async () => {
    on(`add_config/${configGroupId}`, addConfigPayload)
      .reply(OK, configItem);

    await api
      .addConfig(configGroupId, addConfigPayload)
      .should.eventually.be.deep.equal(configItem);
  });

  it('update config group', async () => {
    on(`update_config_group/${configGroupId}`, updateConfigGroupPayload)
      .reply(OK, config);

    await api
      .updateConfigGroup(configGroupId, updateConfigGroupPayload)
      .should.eventually.be.deep.equal(config);
  });

  it('update config', async () => {
    on(`update_config/${configId}`, updateConfigPayload)
      .reply(OK, configItem);

    await api
      .updateConfig(configId, updateConfigPayload)
      .should.eventually.be.deep.equal(configItem);
  });

  it('delete config group', async () => {
    on(`delete_config_group/${configGroupId}`)
      .reply(OK);

    await api
      .deleteConfigGroup(configGroupId)
      .should.be.fulfilled;
  });

  it('delete config', async () => {
    on(`delete_config/${configId}`)
      .reply(OK);

    await api
      .deleteConfig(configId)
      .should.be.fulfilled;
  });
});
