import { faker } from '@faker-js/faker';
import { AddDataset, Dataset } from '../src/types';
import { api, jsonFor, OK, on } from './_helper';

describe('Dataset', () => {
  const projectId = faker.datatype.number();
  const datasetId = faker.datatype.number();
  const dataset: Dataset = jsonFor('Dataset');
  const datasets: Dataset[] = [dataset];
  const addOrUpdateDatesetPayload: AddDataset = jsonFor('AddDataset');

  it('get dataset', async () => {
    on(`get_dataset/${datasetId}`)
      .reply(OK, dataset);

    await api
      .getDataset(datasetId)
      .should.eventually.be.deep.equal(dataset);
  });

  it('get datasets', async () => {
    on(`get_datasets/${projectId}&limit=250&offset=0`)
      .reply(OK, datasets);

    await api
      .getDatasets(projectId)
      .should.eventually.be.deep.equal(datasets);
  });

  it('add dataset', async () => {
    on(`add_dataset/${projectId}`, addOrUpdateDatesetPayload)
      .reply(OK, dataset);

    await api
      .addDataset(projectId, addOrUpdateDatesetPayload)
      .should.eventually.be.deep.equal(dataset);
  });

  it('update dataset', async () => {
    on(`update_dataset/${datasetId}`, addOrUpdateDatesetPayload)
      .reply(OK, dataset);

    await api
      .updateDataset(datasetId, addOrUpdateDatesetPayload)
      .should.eventually.be.deep.equal(dataset);
  });

  it('delete dataset', async () => {
    on(`delete_dataset/${datasetId}`)
      .reply(OK);

    await api
      .deleteDataset(datasetId)
      .should.be.fulfilled;
  });
});
