import {
  createPublicClient,
  http,
  getContract,
  parseUnits,
} from 'viem';
import { AnkrProvider } from '@ankr.com/ankr.js';
import { Inverter } from '@inverter-network/sdk';

import { queryBuilder } from './queryBuilder.js';
import abis from '../../data/abis.js';

export class Queries {
  indexerUrl;
  publicClient;
  ankrProvider;
  networkIdString;
  sdk;

  constructor({ rpcUrl, indexerUrl, chainId, bondingCurveAddress }) {
    this.indexerUrl = indexerUrl;
    this.chainId = chainId;
    this.publicClient = createPublicClient({
      chain: chainId,
      transport: http(rpcUrl),
    });
    this.networkIdString = this.getNetworkIdString(rpcUrl);
    this.ankrProvider = new AnkrProvider(
      this.getAdvancedApiEndpoint(rpcUrl)
    );

    this.bondingCurve = getContract({
      address: bondingCurveAddress,
      client: this.publicClient,
      abi: abis.bondingCurveAbi,
    });

    this.sdk = new Inverter({
      publicClient: this.publicClient,
    });
  }

  async loadSdk(orchestratorAddress) {
    await this.sdk.getWorkflow({
      orchestratorAddress,
      requestedModules: {
        fundingManager:
          'FM_BC_Restricted_Bancor_Redeeming_VirtualSupply_v1',
        paymentProcessor: 'PP_Streaming_v1',
        authorizer: 'AUT_Roles_v1',
        optionalModules: ['LM_PC_PaymentRouter_v1'],
      },
    });
  }

  // QUERIES

  async getTimeframe({ startBlock, endBlock, address }) {
    if (!startBlock && startBlock !== 0) {
      startBlock = await this.getLastPurchaseBlock(address);
    }
    if (!endBlock) {
      endBlock = await this.getCurrentBlockNumber();
    }

    return {
      startBlock,
      endBlock,
    };
  }

  async getLastPurchaseBlock(address) {
    const {
      Swap: [lastBuy],
    } = await this.indexerConnector(
      queryBuilder.indexer.lastBuyBlocknumber(address, this.chainId)
    );
    return lastBuy.blockTimestamp;
  }

  async getCurrentBlockNumber() {
    return await this.publicClient.getBlockNumber();
  }

  async getAmountOut(collateralIn) {
    return await this.bondingCurve.read.calculatePurchaseReturn([
      collateralIn,
    ]);
  }

  async getIssuanceSupply() {
    return await this.bondingCurve.read.getVirtualIssuanceSupply();
  }

  async getInflows(token, recipient, startBlock, endBlock) {
    const transactions = await this.ankrProvider.getTokenTransfers({
      address: recipient,
      fromBlock: startBlock,
      toBlock: endBlock,
      blockchain: this.networkIdString,
      pageSize: 10000,
    });

    return transactions.transfers
      .filter(
        (tx) => tx.toAddress.toLowerCase() === recipient.toLowerCase()
      )
      .filter(
        (tx) =>
          tx.contractAddress.toLowerCase() === token.toLowerCase()
      )
      .reduce((acc, tx) => {
        const { fromAddress, value, tokenDecimals } = tx;
        if (!acc[fromAddress]) {
          acc[fromAddress] = {
            contribution: parseUnits(value, tokenDecimals),
          };
        } else {
          acc[fromAddress].contribution += parseUnits(
            value,
            tokenDecimals
          );
        }
        return acc;
      }, {});
  }

  async getBalances(token, addresses) {
    const { holders } = await this.ankrProvider.getTokenHolders({
      blockchain: this.networkIdString,
      contractAddress: token,
    });

    const filteredHolders = holders
      .filter((holder) =>
        addresses.includes(holder.holderAddress.toLowerCase())
      )
      .reduce((obj, holder) => {
        obj[holder.holderAddress] = BigInt(holder.balanceRawInteger);
        return obj;
      }, {});

    return filteredHolders;
  }

  async getIssuanceToken() {
    return await this.bondingCurve.read.getIssuanceToken();
  }

  async getSpotPrice() {
    return await this.bondingCurve.read.getStaticPriceForBuying();
  }

  async getAggregateVestings(orchestratorAddress) {
    const { LinearVesting: vestings } = await this.indexerConnector(
      queryBuilder.indexer.vestings(this.chainId, orchestratorAddress)
    );

    return vestings.reduce((acc, vesting) => {
      if (!acc[vesting.recipient]) {
        acc[vesting.recipient] = BigInt(vesting.amountRaw);
      } else {
        acc[vesting.recipient] += BigInt(vesting.amountRaw);
      }
      return acc;
    }, {});
  }

  /* 
    CONNECTORS
  */

  async indexerConnector(query) {
    const response = await fetch(this.indexerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
      }),
    });

    const { data } = await response.json();
    return data;
  }

  /*
    UTILS
  */

  getNetworkIdString(rpcUrl) {
    const [, , , networkIdString] = rpcUrl.split('/');
    return networkIdString;
  }

  getAdvancedApiEndpoint(rpcUrl) {
    const dissembled = rpcUrl.split('/');
    dissembled[3] = 'multichain';
    const reassembled = dissembled.join('/');
    return reassembled;
  }
}
