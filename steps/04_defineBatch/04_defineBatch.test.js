import '../../env.js';

import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import { defineBatch } from './04_defineBatch.js';
import { Queries } from '../../services/Queries/Queries.js';
import {
  batchConfig,
  batchReportData,
  projectConfig,
  allowlist,
} from '../../utils/testUtils/staticTestData.js';
import { Batch } from '../../services/Batch/Batch.js';
import { getAnkrRpcUrl } from '../../utils/helpers.js';

const { CHAIN_ID, INDEXER_URL } = process.env;

describe('#defineBatch', () => {
  let queryService, batchService;

  before(async () => {
    queryService = new Queries({
      rpcUrl: getAnkrRpcUrl(),
      indexerUrl: INDEXER_URL,
      chainId: CHAIN_ID,
    });
    await queryService.setup(projectConfig.ORCHESTRATOR);

    batchService = new Batch({
      batchConfig,
    });
  });

  it('defines the batch', async () => {
    await defineBatch({
      queryService,
      batchService,
      projectConfig,
      batchConfig,
      allowlist,
    });

    assert.deepStrictEqual(batchService.data, batchReportData);
  });
});
