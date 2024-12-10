import '../../env.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';

import { getContract, isAddress } from 'viem';

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
      '0x67360b514d756dfb8d1752e4f65b1f2e3acb5bc5';

    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });

    it('sets relevant workflow addresses', async () => {
      await queryService.setup(orchestratorAddress);
      assert.deepStrictEqual(queryService.queries.addresses, {
        bondingCurve: '0x941798FBA003F1FD3e3EC00205b33E3da6916895',
        collateralToken: '0x065775C7aB4E60ad1776A30DCfB15325d231Ce4F',
        issuanceToken: '0xDC282e0ee02e02D59040DA5130e72218D2441431',
        mintWrapper: '0x28E0D192526c59564D616247B876EE4D122EcA46',
        orchestrator: '0x67360b514d756dfb8d1752e4f65b1f2e3acb5bc5',
        paymentRouter: '0x63983C10695aE6d559b39011C969cAD6FfdAdf38',
      });
      assert.doesNotThrow(async () => {
        await queryService.bondingCurve.read.identifier();
      });
    });
  });

  describe('#getCurrentBlockNumber', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });

    it('should return the blocknumber of the BUY', async () => {
      const endBlock = await queryService.getCurrentBlockNumber();
      assert(endBlock > 14903025n);
    });
  });

  // NOTE: requires the secret ANKR API key to be set in .env.test
  describe('#getInflows', () => {
    const fromTimestamp = '1726684518';
    const toTimestamp = '1726692378';
    const token = '0x9464905aA41672B1fA9f2DC98fE54852f43bEBB3';
    const recipient = '0x4ffe42c1666e50104e997DD07E43c673FD39C81d';

    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      advancedApiKey: process.env.ANKR_API_KEY,
    });

    it('should return all inflows within the timeframe', async () => {
      const receivedInflows = await queryService.getInflows(
        token,
        recipient,
        fromTimestamp,
        toTimestamp
      );

      assert.deepStrictEqual(receivedInflows, inflows);
    });
  });

  describe('#getAmountOut', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });
    queryService.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: queryService.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('should return the amount out', async () => {
      const amountOut = await queryService.getAmountOut(
        1000000000000000000n
      );
      assert.equal(amountOut, 5412936878032120963n);
    });
  });

  describe('#getIssuanceSupply', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });
    queryService.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: queryService.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('should return the issuance supply', async () => {
      const supply = await queryService.getIssuanceSupply();
      assert.equal(supply, 352019917143786833732572n);
    });
  });

  describe('#getSpotPrice', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });
    queryService.bondingCurve = getContract({
      address: '0xb2c66815262f7a69189Fd7A2b2ea5482a6082958',
      client: queryService.publicClient,
      abi: abis.bondingCurveAbi,
    });

    it('returns the spot price', async () => {
      const spotPrice = await queryService.getSpotPrice();
      assert.equal(spotPrice, 180144n);
    });
  });

  describe('#getTimeframe', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });
    queryService.queries.addresses = {
      orchestrator: projectConfig.ORCHESTRATOR,
    };

    describe('with configuration', () => {
      const configuration = {
        FROM_TIMESTAMP: '1725654505',
        TO_TIMESTAMP: '1725655119',
      };

      it('returns the timeframe from the last purchase block to the current block', async () => {
        const timeframe = await queryService.getTimeframe({
          configuration: configuration,
        });
        assert.equal(timeframe.fromTimestamp, '1725654505');
        assert.equal(timeframe.toTimestamp, '1725655119');
      });
    });
  });

  describe('#getNftHolders', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
      advancedApiKey: process.env.ANKR_API_KEY,
    });

    it('should return all NFT holders', async () => {
      await queryService.getNftHolders(projectConfig.NFT);

      assert.deepStrictEqual(queryService.queries.nftHolders, [
        '0x6747772f37a4f7cfdea180d38e8ad372516c9548',
        '0xa6e12ede427516a56a5f6ab6e06dd335075eb04b',
        '0xcb1edf0e617c0fab6408701d58b746451ee6ce2f',
      ]);
    });
  });

  describe('#getAllowlist', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
    });

    it('should return the allowlist', async () => {
      const addresses = await queryService.getAllowlist();
      for (const address of addresses) {
        assert.ok(isAddress(address));
      }
    });
  });

  describe('#getIssuanceTokenFromWrapper', () => {
    const queryService = new Queries({
      indexerUrl: process.env.INDEXER_URL,
      rpcUrl: process.env.RPC_URL,
      chainId: process.env.CHAIN_ID,
      backendUrl: process.env.BACKEND_URL,
    });

    queryService.queries.addresses.mintWrapper =
      '0x28E0D192526c59564D616247B876EE4D122EcA46';

    it('should return the issuance token', async () => {
      const token = await queryService.getIssuanceTokenFromWrapper();
      assert.ok(isAddress(token));
    });
  });
});
