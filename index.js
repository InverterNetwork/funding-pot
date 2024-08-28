import dotenv from 'dotenv';
dotenv.config();
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

import { Queries } from './services/Queries/Queries.js';
import { Safe } from './services/Safe/Safe.js';
import { TransactionBuilder } from './services/TransactionBuilder/TransactionBuilder.js';
import { Allocations } from './services/Allocations/Allocations.js';

const { ANKR_API_KEY } = process.env;
const [, , PROJECT_NAME, STEP] = process.argv;

async function main() {
  // load project config (= project-specific constants)
  const projectConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, `./data/input/config.json`))
  );
  // load batch config (batch-specific constants such as allowlist, start & end block)
  const batchConfig = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        `./data/input/${PROJECT_NAME}/${STEP}.json`
      )
    )
  );

  const {
    SAFE,
    BONDING_CURVE,
    CHAIN_ID,
    ISSUANCE_TOKEN,
    COLLATERAL_TOKEN,
    NFT,
  } = projectConfig[PROJECT_NAME];

  console.log(ANKR_API_KEY);

  // instantiate services
  const queryService = new Queries({
    rpcUrl: 'https://rpc.ankr.com/optimism/' + ANKR_API_KEY,
    indexerUrl: 'https://indexer-v2.ankr.com/graphql',
    chainId: CHAIN_ID,
    bondingCurveAddress: BONDING_CURVE,
  });
  const transactionBuilderService = new TransactionBuilder();
  const safeService = new Safe(
    CHAIN_ID,
    SAFE,
    'https://rpc.ankr.com/optimism/' + ANKR_API_KEY
  );

  const { timeframe, allowlist } = batchConfig;

  // get timeframe
  const { startBlock, endBlock } = await queryService.getTimeframe({
    ...timeframe,
    address: SAFE,
  });

  // get inflows
  const inflowsData = await queryService.getInflows(
    COLLATERAL_TOKEN,
    SAFE,
    startBlock,
    endBlock
  );

  const allocationsService = new Allocations(inflowsData);

  // get addresses eligible for contribution
  const eligibleAddresses = allowlist
    ? allowlist
    : await queryService.getNftHolders(NFT);

  // earmark eligible addresses
  allocationsService.checkEligibility(eligibleAddresses);

  // add aggregate contribution data
  allocationsService.addContributionData();

  // add volume of batch purchase
  const purchaseVolume = await queryService.getAmountOut(
    allocationsService.data.totalContributions
  );

  // add allocation per address
  allocationsService.calculateRawAllocations(purchaseVolume);

  // get current balances of contributors to check max balance limit
  const contributors = allocationsService.getContributors();
  const currentBalances = await queryService.getBalances(
    ISSUANCE_TOKEN,
    contributors
  );
  const currentIssuanceSupply =
    await queryService.getIssuanceSupply();
  allocationsService.checkBalanceLimit(
    currentBalances,
    currentIssuanceSupply
  );
}

main();