import { Queries } from '../../services/Queries/Queries.js';
import { Batch } from '../../services/Batch/Batch.js';
import { Safe } from '../../services/Safe/Safe.js';
import { TransactionBuilder } from '../../services/TransactionBuilder/TransactionBuilder.js';
import { getAnkrRpcUrl } from '../../utils/helpers.js';

export const instantiateServices = async (
  projectConfig,
  batchConfig,
  batchReports
) => {
  const {
    CHAIN_ID,
    INDEXER_URL,
    BACKEND_URL,
    RPC_URL,
    ANKR_API_KEY,
  } = process.env;
  const { ORCHESTRATOR } = projectConfig;

  // instantiate services
  const queryService = new Queries({
    rpcUrl: RPC_URL,
    indexerUrl: INDEXER_URL,
    chainId: CHAIN_ID,
    backendUrl: BACKEND_URL,
    advancedApiKey: ANKR_API_KEY,
  });

  await queryService.setup(ORCHESTRATOR);

  const transactionBuilderService = new TransactionBuilder({
    batchConfig,
    projectConfig,
    workflowAddresses: queryService.queries.addresses,
  });

  const safeService = new Safe(CHAIN_ID, projectConfig, RPC_URL);

  const batchService = new Batch({
    batchConfig,
    batchReports,
  });

  return {
    safeService,
    transactionBuilderService,
    batchService,
    queryService,
  };
};
