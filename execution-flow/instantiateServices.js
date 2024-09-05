import { Queries } from '../services/Queries/Queries.js';
import { Batch } from '../services/Batch/Batch.js';
import { Safe } from '../services/Safe/Safe.js';
import { TransactionBuilder } from '../services/TransactionBuilder/TransactionBuilder.js';

export const instantiateServices = async (projectConfig) => {
  const { ANKR_API_KEY } = process.env;
  const {
    SAFE,
    BONDING_CURVE,
    CHAIN_ID,
    PAYMENT_ROUTER,
    ISSUANCE_TOKEN,
    COLLATERAL_TOKEN,
  } = projectConfig;

  // instantiate services
  const transactionBuilderService = new TransactionBuilder({
    safe: SAFE,
    paymentRouter: PAYMENT_ROUTER,
    issuanceToken: ISSUANCE_TOKEN,
    collateralToken: COLLATERAL_TOKEN,
  });
  const safeService = new Safe(
    CHAIN_ID,
    SAFE,
    'https://rpc.ankr.com/optimism/' + ANKR_API_KEY
  );
  const batchService = new Batch();
  const queryService = new Queries({
    rpcUrl: 'https://rpc.ankr.com/optimism/' + ANKR_API_KEY,
    indexerUrl: 'https://indexer-v2.ankr.com/graphql',
    chainId: CHAIN_ID,
    bondingCurveAddress: BONDING_CURVE,
  });
  await queryService.loadSdk();

  return {
    safeService,
    transactionBuilderService,
    batchService,
    queryService,
  };
};
