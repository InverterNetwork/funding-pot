import { describe, it } from 'node:test';
import assert from 'node:assert';
import { TransactionBuilder } from './TransactionBuilder.js';

describe('TransactionBuilder', () => {
  const mockAddress1 = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';
  const mockAddress2 = '0xc0B16b40c6079b0A317a2fEBc062509CDF447f5c';
  const mockAddress3 = '0x478D97356251BF1F1e744587E67207dAb100CaDb';
  const mockAddress4 = '0xdbC3363De051550D122D9C623CBaff441AFb477C';
  const mockAddress5 = '0xEf409c51aDdCf4642E2C98e935Bc5D9AC273AF57';

  const mockBatchConfig = {
    VESTING_DETAILS: {
      START: 10n,
      CLIFF: 11n,
      END: 12n,
    },
  };

  const mockProjectConfig = {
    SAFE: mockAddress1,
  };

  const mockWorkflowAddresses = {
    paymentRouter: mockAddress2,
    issuanceToken: mockAddress3,
    collateralToken: mockAddress4,
    bondingCurve: mockAddress5,
  };

  const setupTransactionBuilder = () => {
    return new TransactionBuilder({
      projectConfig: mockProjectConfig,
      workflowAddresses: mockWorkflowAddresses,
      batchConfig: mockBatchConfig,
    });
  };

  describe('#buy', () => {
    it('returns the raw tx', async () => {
      const transactionBuilder = setupTransactionBuilder();
      transactionBuilder.buy(10n);
      const [tx] = transactionBuilder.getEncodedTxs();

      assert.deepStrictEqual(tx, {
        to: mockAddress5,
        value: '0',
        data: '0xd6febde8000000000000000000000000000000000000000000000000000000000000000a0000000000000000000000000000000000000000000000000000000000000001',
      });
    });
  });

  describe('#assignVestingAdmin', () => {
    const recipient = '0x0000000000000000000000000000000000000001';

    it('returns the raw tx', async () => {
      const transactionBuilder = setupTransactionBuilder();
      transactionBuilder.assignVestingAdmin(recipient);
      const [tx] = transactionBuilder.getEncodedTxs();

      assert.deepStrictEqual(tx, {
        to: mockAddress2,
        value: '0',
        data: '0x6c67e8075041594d454e545f5055534845520000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001',
      });
    });
  });

  describe('#transferTokens', () => {
    const recipient = '0x0000000000000000000000000000000000000002';
    const amount = 10n;
    const tokenAddress = mockAddress3;

    it('returns the raw tx', async () => {
      const transactionBuilder = setupTransactionBuilder();
      transactionBuilder.transferTokens(
        tokenAddress,
        recipient,
        amount
      );
      const [tx] = transactionBuilder.getEncodedTxs();

      assert.deepStrictEqual(tx, {
        to: mockAddress3,
        value: '0',
        data: '0xa9059cbb0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000a',
      });
    });
  });

  describe('createVestings', () => {
    const recipient = '0x0000000000000000000000000000000000000002';
    const amount = 10n;

    it('returns the raw tx', async () => {
      const transactionBuilder = setupTransactionBuilder();
      transactionBuilder.createVestings([{ recipient, amount }]);
      const [tx] = transactionBuilder.getEncodedTxs();

      assert.deepStrictEqual(tx, {
        to: mockAddress2,
        value: '0',
        data: '0x8028b82f0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000478d97356251bf1f1e744587e67207dab100cadb000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000b000000000000000000000000000000000000000000000000000000000000000c',
      });
    });
  });

  describe('getTxBatches', () => {
    const arr = [...Array(70).keys()];

    it('slices the array into batches of 55 elements', () => {
      const transactionBuilder = setupTransactionBuilder();
      const txs = transactionBuilder.getTxBatches(arr);
      const [first, second] = txs;
      assert.equal(first.length, 55);
      assert.equal(second.length, 15);
    });
  });

  describe('getReadableTxBatches', () => {
    const recipient = '0x0000000000000000000000000000000000000002';
    const amount = 10n;

    it('returns the raw tx', async () => {
      const transactionBuilder = setupTransactionBuilder();
      transactionBuilder.createVestings([{ recipient, amount }]);
      const txs = transactionBuilder.getReadableTxBatches();
      assert.deepStrictEqual(txs, [
        [
          {
            to: mockAddress2,
            functionSignature:
              'pushPayment(address,address,uint256,uint256,uint256,uint256)',
            inputValues: [
              recipient,
              mockAddress3,
              amount,
              mockBatchConfig.VESTING_DETAILS.START,
              mockBatchConfig.VESTING_DETAILS.CLIFF,
              mockBatchConfig.VESTING_DETAILS.END,
            ],
          },
        ],
      ]);
    });
  });
});
