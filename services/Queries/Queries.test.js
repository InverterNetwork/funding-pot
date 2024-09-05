import dotenv from 'dotenv';
dotenv.config();

import { describe, it, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert';
import { Queries } from './Queries.js';

describe('Queries', () => {
  const indexerUrl =
    'https://indexer.bigdevenergy.link/7612f58/v1/graphql';
  const mockMulitSigAddress =
    '0x6747772f37a4F7CfDEA180D38e8ad372516c9548';

  describe('#loadSdk', () => {
    const querySevice = new Queries({
      indexerUrl,
      rpcUrl: 'https://sepolia.base.org',
      chainId: 84532,
    });

    it('loads the sdk', async () => {
      await querySevice.loadSdk(
        '0x49BC19af25056Db61cfB4035A23ce3B509DF46B3'
      );
      console.log(querySevice.sdk);
    });
  });

  describe('with loaded sdk', () => {});

  // describe('#getLastPurchaseBlock', () => {
  // const querySevice = new Queries({
  //   indexerUrl,
  //   rpcUrl: 'https://sepolia.base.org',
  //   chainId: 84532,
  // });

  //   it('should return the blocknumber of the BUY', async () => {
  //     const startBlock = await querySevice.getLastPurchaseBlock(
  //       mockMulitSigAddress
  //     );
  //     assert.equal(startBlock, 1725444354);
  //   });
  // });

  // describe('#getCurrentBlockNumber', () => {
  //   const querySevice = new Queries({
  //     rpcUrl:
  //       'https://rpc.ankr.com/optimism/' + process.env.ANKR_API_KEY,
  //   });

  //   it('should return the blocknumber of the BUY', async () => {
  //     const endBlock = await querySevice.getCurrentBlockNumber();
  //     assert(endBlock > 124057756n);
  //   });
  // });

  // describe('#getInflows', () => {
  //   const startBlock = '124058551';
  //   const endBlock = '124058578';
  //   const token = '0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1';
  //   const recipient = '0x253DD57300904225762960755B7662e6ae06492d';

  //   const querySevice = new Queries({
  //     rpcUrl:
  //       'https://rpc.ankr.com/optimism/' + process.env.ANKR_API_KEY,
  //   });

  //   it('should return all inflows within the timeframe', async () => {
  //     const inflows = await querySevice.getInflows(
  //       token,
  //       recipient,
  //       startBlock,
  //       endBlock
  //     );

  //     assert.deepStrictEqual(inflows, {
  //       '0x327f6bc1b86eca753bfd2f8187d22b6aef7783eb': {
  //         contribution: 15560000000000000000n,
  //       },
  //       '0x932285a2e33b89981d25eb586a3893e0f5a1a9da': {
  //         contribution: 11000000000000000000n,
  //       },
  //       '0x3bc66727a37f7c0e1039540e3dc2254d39f420ff': {
  //         contribution: 6000000000000000000n,
  //       },
  //       '0xf7c3128a43446621430530d6267d0eb21061fab6': {
  //         contribution: 6020000000000000000n,
  //       },
  //     });
  //   });
  // });

  // describe('#getAmountOut', () => {
  //   const bondingCurveAddress =
  //     '0xcB18d34bCe932F39b645A0F06b8D9D0b981F6F87';
  //   const querySevice = new Queries({
  //     rpcUrl: 'https://sepolia.optimism.io',
  //     bondingCurveAddress,
  //   });

  //   it('should return the amount out', async () => {
  //     const amountOut = await querySevice.getAmountOut(
  //       1000000000000000000n
  //     );
  //     assert.equal(amountOut, 411781969873082n);
  //   });
  // });

  // describe('#getIssuanceSupply', () => {
  //   const bondingCurveAddress =
  //     '0xcB18d34bCe932F39b645A0F06b8D9D0b981F6F87';
  //   const querySevice = new Queries({
  //     rpcUrl: 'https://sepolia.optimism.io',
  //     bondingCurveAddress,
  //   });

  //   it('should return the amount out', async () => {
  //     const supply = await querySevice.getIssuanceSupply();
  //     assert.equal(supply, 146359422682779172835548335n);
  //   });
  // });

  // describe('#getBalances', () => {
  //   const token = '0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9';
  //   const addresses = [
  //     '0x2e26ff7bc1ba49c4a234858f6a75379c56a9c85b',
  //     '0x27905e39b5eb4ebfdfbc285f209f46d92b01f3a0',
  //   ];

  //   const querySevice = new Queries({
  //     rpcUrl:
  //       'https://rpc.ankr.com/optimism/' + process.env.ANKR_API_KEY,
  //   });

  //   it('returns list of token holders that sent tokens to funding pot with balances', async () => {
  //     const balances = await querySevice.getBalances(
  //       token,
  //       addresses
  //     );
  //     assert.deepStrictEqual(balances, {
  //       '0x27905e39b5eb4ebfdfbc285f209f46d92b01f3a0':
  //         3067718287019563653n,
  //       '0x2e26ff7bc1ba49c4a234858f6a75379c56a9c85b':
  //         152112944197275n,
  //     });
  //   });
  // });

  // describe('#getSpotPrice', () => {
  //   const bondingCurveAddress =
  //     '0xcB18d34bCe932F39b645A0F06b8D9D0b981F6F87';
  //   const querySevice = new Queries({
  //     rpcUrl: 'https://sepolia.optimism.io',
  //     bondingCurveAddress,
  //   });

  //   it('returns the spot price', async () => {
  //     const spotPrice = await querySevice.getSpotPrice();
  //     assert.equal(spotPrice, 2380143065n);
  //   });
  // });

  // describe('#getAggregateVestings', () => {
  //   const indexerUrl =
  //     'https://indexer.bigdevenergy.link/3e4a36f/v1/graphql';
  //   const querySevice = new Queries({
  //     indexerUrl,
  //     rpcUrl: 'https://sepolia.base.org',
  //     chainId: 84532,
  //   });
  //   const orchestratorAddress =
  //     '0x49BC19af25056Db61cfB4035A23ce3B509DF46B3';

  //   it('gets aggregate vestings', async () => {
  //     const vestings = await querySevice.getAggregateVestings(
  //       orchestratorAddress
  //     );

  //     assert.deepStrictEqual(vestings, {
  //       '0xa6e12EDe427516a56a5F6ab6e06dD335075eb04b': 420n,
  //       '0xCb1eDf0E617c0FaB6408701d58b746451EE6cE2f': 28n,
  //       '0xB4f8D886E9e831B6728D16Ed7F3a6c27974ABAA4': 82n,
  //       '0x6747772f37a4F7CfDEA180D38e8ad372516c9548': 4n,
  //       '0xCacC010EC451Cb33a7aE7cBa14de0a49293c2877': 7n,
  //     });
  //   });
  // });
});
