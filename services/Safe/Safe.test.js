import '../../env.js';

import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';

import SafeApiKit from '@safe-global/api-kit';

import { Safe } from './Safe.js';
import { TransactionBuilder } from '../TransactionBuilder/TransactionBuilder.js';
import { getAnkrRpcUrl } from '../../utils/helpers.js';

describe('Safe', () => {
  const mockAddress2 = '0xc0B16b40c6079b0A317a2fEBc062509CDF447f5c';
  const mockAddress3 = '0x478D97356251BF1F1e744587E67207dAb100CaDb';
  const mockAddress4 = '0xdbC3363De051550D122D9C623CBaff441AFb477C';
  const mockAddress5 = '0xEf409c51aDdCf4642E2C98e935Bc5D9AC273AF57';

  const baseSepoliaChainId = 84532n;
  const safeAddress = '0x4ffe42c1666e50104e997DD07E43c673FD39C81d';
  const rpc = getAnkrRpcUrl();

  const projectConfig = {
    SAFE: safeAddress,
  };

  const batchConfig = {
    VESTING_DETAILS: {
      START: 10n,
      CLIFF: 11n,
      END: 12n,
    },
  };

  let transactionBuilder, safe;

  beforeEach(() => {
    safe = new Safe(baseSepoliaChainId, projectConfig, rpc);
    transactionBuilder = new TransactionBuilder({
      projectConfig,
      workflowAddresses: {
        paymentRouter: mockAddress2,
        issuanceToken: mockAddress3,
        collateralToken: mockAddress4,
        bondingCurve: mockAddress5,
      },
      batchConfig,
    });
  });

  describe('addDelegate', () => {
    it.skip('addDelegate', async () => {
      await safe.addDelegate(
        '0xa6e12EDe427516a56a5F6ab6e06dD335075eb04b'
      );
    });
  });

  describe('#proposeTxs', async () => {
    const tokenAddress = '0xd5018fA63924d1BE2C2C42aBDc24bD754499F97c'; // mock
    const recipient = '0x6747772f37a4F7CfDEA180D38e8ad372516c9548';
    const amount = 10n;

    it('increases the safe tx nonce', async () => {
      transactionBuilder.transferTokens(
        tokenAddress,
        recipient,
        amount
      );
      const txs = transactionBuilder.getTxBatches(
        transactionBuilder.getEncodedTxs()
      );
      const apiKit = new SafeApiKit.default({
        chainId: baseSepoliaChainId,
      });
      const nonceBefore = await apiKit.getNextNonce(safeAddress);
      await safe.proposeTxs(txs);
      const nonceAfter = await apiKit.getNextNonce(safeAddress);
      assert.strictEqual(nonceAfter - nonceBefore, 1);
    });

    it('adds the txs to the safeTransactions array', async () => {
      transactionBuilder.transferTokens(
        tokenAddress,
        recipient,
        amount
      );
      const txs = transactionBuilder.getTxBatches(
        transactionBuilder.getEncodedTxs()
      );
      await safe.proposeTxs(txs);
      assert.equal(safe.safeTransactions.length, txs.length);
    });
  });
});
