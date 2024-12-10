import '../../../env.js';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { loadProjectsConfig } from '../../../steps/01_loadInputs/01_loadInputs.js';
import { Safe } from '../../../services/Safe/Safe.js';
import { TransactionBuilder } from '../../../services/TransactionBuilder/TransactionBuilder.js';
import { keccak256, toHex } from 'viem';
import { Queries } from '../../../services/Queries/Queries.js';
import { getAnkrRpcUrl } from '../../helpers.js';

const { CHAIN_ID, INDEXER_URL, BACKEND_URL, RPC_URL } = process.env;

const rolesFactory = '0x000000000000aDdB49795b0f9bA5BC298cDda236'; // static for zkevm
const rolesMasterCopy = '0x9646fDAD06d3e24444381f44362a3B0eB343D337';
const ROLE_KEY =
  '0x000000000000000000000000000000000000000000000000000000000000000f';

export async function setupRoles(
  admin,
  orchestrator,
  feeClaimer,
  feeRecipient
) {
  const queries = new Queries({
    rpcUrl: RPC_URL,
    indexerUrl: INDEXER_URL,
    chainId: CHAIN_ID,
    backendUrl: BACKEND_URL,
    advancedApiKey: process.env.ADVANCED_API_KEY,
  });
  await queries.setup(orchestrator);
  const transactionBuilder = new TransactionBuilder({
    projectConfig: { SAFE: admin },
    workflowAddresses: queries.queries.addresses,
  });
  const safe = new Safe(CHAIN_ID, { SAFE: admin }, RPC_URL);

  // Deploy Roles
  const rolesModule = transactionBuilder.deployZodiacRoles(
    rolesFactory,
    rolesMasterCopy
  );

  // Enable Roles on Safe
  transactionBuilder.enableModule(admin, rolesModule);

  // Define role
  transactionBuilder.createRole(ROLE_KEY, rolesModule, feeRecipient);

  // // Assign role to fee claimer
  transactionBuilder.assignRole(ROLE_KEY, rolesModule, feeClaimer);

  // Propose transactions
  const txBatches = transactionBuilder.getEncodedTxBatches();

  await safe.proposeTxs(txBatches);

  return rolesModule;
}
