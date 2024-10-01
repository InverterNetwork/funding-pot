import '../../env.js';

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { getAddress } from 'viem';
import {
  generatePrivateKey,
  privateKeyToAddress,
} from 'viem/accounts';

import { proposeBatch } from './05_proposeBatch.js';
import { instantiateServices } from '../03_instantiateServices/03_instantiateServices.js';
import {
  signAndExecutePendingTxs,
  mintMockTokens,
} from '../../utils/testUtils/testHelpers.js';
import {
  batchConfig,
  batchReportData,
  projectConfig,
} from '../../utils/testUtils/staticTestData.js';
import { Batch } from '../../services/Batch/Batch.js';

import { getAnkrRpcUrl } from '../../utils/helpers.js';
import { TransactionBuilder } from '../../services/TransactionBuilder/TransactionBuilder.js';
import { Safe } from '../../services/Safe/Safe.js';
import { Queries } from '../../services/Queries/Queries.js';

describe('#proposeBatch', () => {
  let queryService,
    safeService,
    transactionBuilderService,
    batchService;

  describe('with a small batch (2 vestings)', () => {
    const issuance1 = 6_000_000_000_000_000n;
    const issuance2 = 4_000_000_000_000_000n;

    beforeEach(async () => {
      batchService = new Batch({
        batchConfig,
      });
      safeService = new Safe(
        process.env.CHAIN_ID,
        projectConfig,
        getAnkrRpcUrl()
      );
      queryService = new Queries({
        rpcUrl: getAnkrRpcUrl(),
        indexerUrl: process.env.INDEXER_URL,
        chainId: process.env.CHAIN_ID,
      });
      await queryService.setup(projectConfig.ORCHESTRATOR);
      transactionBuilderService = new TransactionBuilder({
        projectConfig,
        workflowAddresses: queryService.queries.addresses,
        batchConfig,
      });

      batchService.data = batchReportData;
    });

    it('adds a transaction to the safe', async () => {
      const safeNonceBefore = await safeService.apiKit.getNextNonce(
        safeService.safeAddress
      );
      await proposeBatch({
        queryService,
        batchService,
        transactionBuilderService,
        safeService,
      });
      const safeNonceAfter = await safeService.apiKit.getNextNonce(
        safeService.safeAddress
      );
      assert.equal(safeNonceAfter - safeNonceBefore, 1);
    });
  });

  describe.skip('with big batch (60 vestings)', () => {
    let participants, additionalIssuance;

    beforeEach(async () => {
      ({
        queryService,
        safeService,
        transactionBuilderService,
        batchService,
      } = await instantiateServices(projectConfig, batchConfig));
      additionalIssuance = await queryService.getAmountOut(
        totalValidContribution
      );
      participants = Object.fromEntries(
        Array(recipients)
          .fill(0)
          .map((r, i) => [
            privateKeyToAddress(generatePrivateKey()),
            {
              issuanceAllocation:
                i < recipients - 1
                  ? 1n
                  : additionalIssuance - BigInt(recipients - 1),
            },
          ])
      );
      batchService.data.totalValidContribution =
        totalValidContribution;
      batchService.data.additionalIssuance = additionalIssuance;
      batchService.data.participants = participants;
      await mintMockTokens(
        getAddress(queryService.queries.addresses.collateralToken),
        totalValidContribution,
        getAddress(projectConfig.SAFE)
      );
    });

    it('proposes the transactions', async () => {
      await proposeBatch({
        queryService,
        batchService,
        transactionBuilderService,
        safeService,
      });

      assert.doesNotThrow(async () => {
        await signAndExecutePendingTxs(projectConfig.SAFE);
      });
    });
  });
});
