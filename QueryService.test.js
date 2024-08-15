// import { describe, it, beforeEach } from 'node:test';
// import assert from 'node:assert';
// import { QueryService } from './QueryService.js';
// import { type } from 'node:os';

// describe('QueryService', () => {
//   const opSepoliaRpcUrl =
//     'https://rpc.ankr.com/optimism_testnet/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29';
//   const indexerUrl =
//     'https://indexer.bigdevenergy.link/a414bf3/v1/graphql';
//   const opSepliaBlockExplorerUrl =
//     'https://api-sepolia-optimistic.etherscan.io/api';
//   const mockMulitSigAddress =
//     '0x6747772f37a4F7CfDEA180D38e8ad372516c9548';

//   describe('#getLastPurchaseBlock', () => {
//     const querySevice = new QueryService({
//       indexerUrl,
//       rpcUrl:
//         'https://rpc.ankr.com/optimism_testnet/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29',
//     });

//     it('should return the blocknumber of the BUY', async () => {
//       const startBlock = await querySevice.getLastPurchaseBlock(
//         mockMulitSigAddress
//       );
//       assert.equal(startBlock, 1721806864);
//     });
//   });

//   describe('#getCurrentBlockNumber', () => {
//     const querySevice = new QueryService({
//       rpcUrl:
//         'https://rpc.ankr.com/optimism/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29',
//     });

//     it('should return the blocknumber of the BUY', async () => {
//       const endBlock = await querySevice.getCurrentBlockNumber();
//       assert(endBlock > 124057756n);
//     });
//   });

//   describe('#getInflows', () => {
//     const startBlock = '124058551';
//     const endBlock = '124058578';
//     const token = '0xdC6fF44d5d932Cbd77B52E5612Ba0529DC6226F1';
//     const recipient = '0x253DD57300904225762960755B7662e6ae06492d';

//     const querySevice = new QueryService({
//       rpcUrl:
//         'https://rpc.ankr.com/optimism/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29',
//     });

//     it('should return all inflows within the timeframe', async () => {
//       const inflows = await querySevice.getInflows(
//         token,
//         recipient,
//         startBlock,
//         endBlock
//       );
//       assert.deepStrictEqual(inflows, {
//         '0x327f6bc1b86eca753bfd2f8187d22b6aef7783eb': 15.56,
//         '0x932285a2e33b89981d25eb586a3893e0f5a1a9da': 11,
//         '0x3bc66727a37f7c0e1039540e3dc2254d39f420ff': 6,
//         '0xf7c3128a43446621430530d6267d0eb21061fab6': 6.02,
//       });
//     });
//   });

//   describe('#getNftHolders', () => {
//     const nft = '0xec9f9d5fC1fC6DdAEBD4179Bd59ACd84BC1880E7';

//     const querySevice = new QueryService({
//       rpcUrl:
//         'https://rpc.ankr.com/optimism/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29',
//     });

//     it('should return all NFT holders with their balances', async () => {
//       const holders = await querySevice.getNftHolders(nft);
//       assert.deepStrictEqual(holders, [
//         '0x340adb6432d4219336ed5845220d8b594fd9f1aa',
//         '0xd0370ac46205972e4edc2fff15d7d237487c62be',
//       ]);
//     });
//   });

//   describe('#getAmountOut', () => {
//     const bondingCurveAddress =
//       '0xcB18d34bCe932F39b645A0F06b8D9D0b981F6F87';
//     const querySevice = new QueryService({
//       rpcUrl: 'https://sepolia.optimism.io',
//       bondingCurveAddress,
//     });

//     it('should return the amount out', async () => {
//       const amountOut = await querySevice.getAmountOut(
//         1000000000000000000n
//       );
//       assert.equal(amountOut, 411781969873082n);
//     });
//   });

//   describe('#getIssuanceSupply', () => {
//     const bondingCurveAddress =
//       '0xcB18d34bCe932F39b645A0F06b8D9D0b981F6F87';
//     const querySevice = new QueryService({
//       rpcUrl: 'https://sepolia.optimism.io',
//       bondingCurveAddress,
//     });

//     it('should return the amount out', async () => {
//       const supply = await querySevice.getIssuanceSupply();
//       assert.equal(supply, 146359422682779172835548335n);
//     });
//   });

//   describe('#getBalances', () => {
//     const token = '0x0c5b4c92c948691EEBf185C17eeB9c230DC019E9';
//     const addresses = [
//       '0x2e26ff7bc1ba49c4a234858f6a75379c56a9c85b',
//       '0x27905e39b5eb4ebfdfbc285f209f46d92b01f3a0',
//     ];

//     const queryService = new QueryService({
//       rpcUrl:
//         'https://rpc.ankr.com/optimism/83faca2c6ed984789a58e5dfbf9ba75d5b2b5d7c48646f6f51a004cb6cccca29',
//     });

//     it('returns list of token holders that sent tokens to funding pot with balances', async () => {
//       const balances = await queryService.getBalances(
//         token,
//         addresses
//       );

//       assert.deepStrictEqual(balances, {
//         '0x27905e39b5eb4ebfdfbc285f209f46d92b01f3a0':
//           '3067718287019563653',
//         '0x2e26ff7bc1ba49c4a234858f6a75379c56a9c85b':
//           '152112944197275',
//       });
//     });
//   });
// });
