import {
  createPublicClient,
  http,
  getContract,
  erc20Abi,
  formatUnits,
  parseUnits,
} from 'viem';
import { queryBuilder } from './queryBuilder.js';
import { bondingCurveAbi } from '../../data/abis.js';
import { AnkrProvider } from '@ankr.com/ankr.js';

export class Queries {
  indexerUrl;
  publicClient;
  ankrProvider;
  networkIdString;

  constructor({ rpcUrl, indexerUrl, chainId, bondingCurveAddress }) {
    this.indexerUrl = indexerUrl;
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
      abi: bondingCurveAbi,
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
      queryBuilder.indexer.lastBuyBlocknumber(address)
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
