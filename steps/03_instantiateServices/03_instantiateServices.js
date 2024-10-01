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
  const { CHAIN_ID, INDEXER_URL } = process.env;
  const { ORCHESTRATOR } = projectConfig;

  // instantiate services
  const queryService = new Queries({
    rpcUrl: getAnkrRpcUrl(),
    indexerUrl: INDEXER_URL,
    chainId: CHAIN_ID,
  });

  await queryService.setup(ORCHESTRATOR);

  const transactionBuilderService = new TransactionBuilder({
    batchConfig,
    projectConfig,
    workflowAddresses: queryService.queries.addresses,
  });

  const safeService = new Safe(
    CHAIN_ID,
    projectConfig,
    getAnkrRpcUrl()
  );

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
