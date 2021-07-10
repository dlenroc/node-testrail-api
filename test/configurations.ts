import { datatype } from 'faker';
import { AddConfig, AddConfigGroup, Config, ConfigItem, UpdateConfig, UpdateConfigGroup } from '..';
import { api, jsonFor, OK, on } from './_helper';

describe('Configurations', () => {
  const projectId = datatype.number();
  const configGroupId = datatype.number();
  const configId = datatype.number();
  const config: Config = jsonFor('Config');
  const configItem: ConfigItem = jsonFor('ConfigItem');
  const configs = [config];
  const addConfigGroupPayload: AddConfigGroup = jsonFor('AddConfigGroup');
  const addConfigPayload: AddConfig = jsonFor('AddConfig');
  const updateConfigGroupPayload: UpdateConfigGroup = jsonFor('UpdateConfigGroup');
  const updateConfigPayload: UpdateConfig = jsonFor('UpdateConfig');

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
