import '../../env.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';

import { getContract } from 'viem';

import abis from '../../data/abis.js';
import {
  inflows,
  projectConfig,
} from '../../utils/testUtils/staticTestData.js';
import { Queries } from './Queries.js';
import { getAnkrRpcUrl } from '../../utils/helpers.js';

describe('Queries', () => {
  describe('#setup', () => {
    const orchestratorAddress =
      '0x49BC19af25056Db61cfB4035A23ce3B509DF46B3';

    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });

    it('sets relevant workflow addresses', async () => {
      await querySevice.setup(orchestratorAddress);
      assert.deepStrictEqual(querySevice.queries.addresses, {
        bondingCurve: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
        collateralToken: '0x9464905aA41672B1fA9f2DC98fE54852f43bEBB3',
        issuanceToken: '0xD7b25E43A017795e98173820fE0AdBe20fE725Ad',
        paymentRouter: '0xD5EDa923A101508a52F6Dc3C1A4975f536B8e4B2',
        orchestrator: '0x49BC19af25056Db61cfB4035A23ce3B509DF46B3',
      });
      assert.doesNotThrow(async () => {
        await querySevice.bondingCurve.read.identifier();
      });
    });
  });

  describe('#getLastPurchaseBlock', () => {
    const mockMulitSigAddress =
      '0x6747772f37a4F7CfDEA180D38e8ad372516c9548';

    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });

    it('should return the blocknumber of the BUY', async () => {
      const fromTimestamp = await querySevice.getLastPurchaseBlock(
        mockMulitSigAddress
      );
      assert.equal(fromTimestamp, 1725525774);
    });
  });

  describe('#getCurrentBlockNumber', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });

    it('should return the blocknumber of the BUY', async () => {
      const endBlock = await querySevice.getCurrentBlockNumber();
      assert(endBlock > 14903025n);
    });
  });

  // NOTE: requires the secret ANKR API key to be set in .env.test
  describe('#getInflows', () => {
    const fromTimestamp = '1726684518';
    const toTimestamp = '1726692378';
    const token = '0x9464905aA41672B1fA9f2DC98fE54852f43bEBB3';
    const recipient = '0x4ffe42c1666e50104e997DD07E43c673FD39C81d';

    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: getAnkrRpcUrl(),
      chainId: process.env.CHAIN_ID,
    });

    it('should return all inflows within the timeframe', async () => {
      const receivedInflows = await querySevice.getInflows(
        token,
        recipient,
        fromTimestamp,
        toTimestamp
      );

      assert.deepStrictEqual(receivedInflows, inflows);
    });
  });

  describe('#getAmountOut', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });
    querySevice.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: querySevice.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('should return the amount out', async () => {
      const amountOut = await querySevice.getAmountOut(
        1000000000000000000n
      );
      assert.equal(amountOut, 5412936878032120963n);
    });
  });

  describe('#getIssuanceSupply', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });
    querySevice.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: querySevice.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('should return the issuance supply', async () => {
      const supply = await querySevice.getIssuanceSupply();
      assert.equal(supply, 352019917143786833732572n);
    });
  });

  describe('#getSpotPrice', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });
    querySevice.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: querySevice.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('returns the spot price', async () => {
      const spotPrice = await querySevice.getSpotPrice();
      assert.equal(spotPrice, 180144n);
    });
  });

  describe('#getBalances', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });
    querySevice.queries.addresses = {
      orchestrator: projectConfig.ORCHESTRATOR,
    };

    it('gets aggregate vestings', async () => {
      const vestings = await querySevice.getBalances();

      assert.deepStrictEqual(vestings, {
        '0xcb1edf0e617c0fab6408701d58b746451ee6ce2f': 28n,
        '0xb4f8d886e9e831b6728d16ed7f3a6c27974abaa4': 82n,
        '0xcacc010ec451cb33a7ae7cba14de0a49293c2877': 7n,
      });
    });
  });

  describe('#getTimeframe', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
    });
    querySevice.queries.addresses = {
      orchestrator: projectConfig.ORCHESTRATOR,
    };
    const mockSafe = '0x6747772f37a4F7CfDEA180D38e8ad372516c9548';

    describe('with no configuration', () => {
      it('returns the timeframe from the last purchase block to the current block', async () => {
        const timeframe = await querySevice.getTimeframe({
          configuration: undefined,
          safe: mockSafe,
        });
        assert.equal(timeframe.fromTimestamp, '1725525774');
        assert.equal(
          timeframe.toTimestamp > timeframe.fromTimestamp,
          true
        );
      });
    });

    describe('with configuration', () => {
      const configuration = {
        FROM_TIMESTAMP: '1725654505',
        TO_TIMESTAMP: '1725655119',
      };

      it('returns the timeframe from the last purchase block to the current block', async () => {
        const timeframe = await querySevice.getTimeframe({
          configuration: configuration,
          safe: mockSafe,
        });
        assert.equal(timeframe.fromTimestamp, '1725654505');
        assert.equal(timeframe.toTimestamp, '1725655119');
      });
    });
  });

  describe('#getNftHolders', () => {
    const querySevice = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: getAnkrRpcUrl(),
      chainId: process.env.CHAIN_ID,
    });

    it('should return all NFT holders', async () => {
      await querySevice.getNftHolders(projectConfig.NFT);

      assert.deepStrictEqual(querySevice.queries.nftHolders, [
        '0x6747772f37a4f7cfdea180d38e8ad372516c9548',
        '0xa6e12ede427516a56a5f6ab6e06dd335075eb04b',
        '0xcb1edf0e617c0fab6408701d58b746451ee6ce2f',
      ]);
    });
  });
});
