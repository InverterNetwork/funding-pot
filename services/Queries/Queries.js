import {
  createPublicClient,
  http,
  getContract,
  parseUnits,
  getAddress,
} from 'viem';
import { AnkrProvider } from '@ankr.com/ankr.js';

import { queryBuilder } from './queryBuilder.js';
import abis from '../../data/abis.js';
import { keysToLowerCase } from '../../utils/helpers.js';

export class Queries {
  indexerUrl;
  chainId;
  publicClient;
  networkIdString;
  ankrProvider;
  bondingCurve;
  queries;
  backendUrl;

  constructor({
    rpcUrl,
    indexerUrl,
    chainId,
    backendUrl,
    advancedApiKey,
  }) {
    this.backendUrl = backendUrl;
    this.indexerUrl = indexerUrl;
    this.chainId = chainId;

    this.publicClient = createPublicClient({
      chain: chainId,
      transport: http(rpcUrl),
    });
    this.networkIdString = this.getNetworkIdString(chainId);
    this.ankrProvider = new AnkrProvider(
      this.getAdvancedApiEndpoint(advancedApiKey)
    );
    this.queries = { addresses: {} };
  }

  async setup(orchestratorAddress) {
    const timerKey = '  ⏱️ Getting relevant addresses (RPC)';
    console.time(timerKey);

    const orchestrator = getContract({
      address: orchestratorAddress,
      client: this.publicClient,
      abi: abis.orchestratorAbi,
    });
    this.queries.addresses.orchestrator = orchestratorAddress;
    this.queries.addresses.bondingCurve =
      await orchestrator.read.fundingManager();
    this.bondingCurve = getContract({
      address: this.queries.addresses.bondingCurve,
      client: this.publicClient,
      abi: abis.bondingCurveAbi,
    });
    this.queries.addresses.collateralToken =
      await this.bondingCurve.read.token();
    this.queries.addresses.mintWrapper =
      await this.bondingCurve.read.getIssuanceToken();
    this.queries.addresses.issuanceToken =
      await this.getIssuanceTokenFromWrapper();
    const modules = await orchestrator.read.listModules();
    for (const module of modules) {
      const moduleContract = getContract({
        address: module,
        client: this.publicClient,
        abi: abis.bondingCurveAbi,
      });
      const moduleName = await moduleContract.read.title();
      if (moduleName === 'LM_PC_PaymentRouter_v1') {
        this.queries.addresses.paymentRouter = module;
      }
    }

    console.timeEnd(timerKey);
  }

  // QUERIES

  async getTimeframe({ configuration }) {
    const timeframe = {};
    timeframe.fromTimestamp = configuration.FROM_TIMESTAMP;
    timeframe.toTimestamp = configuration.TO_TIMESTAMP;
    this.queries.timeframe = timeframe;

    return this.queries.timeframe;
  }

  async getCurrentBlockNumber() {
    const block = await this.publicClient.getBlock();
    this.queries.blockTimestamp = block.timestamp;
    return this.queries.blockTimestamp;
  }

  async getAmountOut(collateralIn) {
    const timerKey = '  ⏱️ Getting purchase amount (RPC)';
    console.time(timerKey);

    this.queries.amountOut =
      await this.bondingCurve.read.calculatePurchaseReturn([
        collateralIn,
      ]);
    console.timeEnd(timerKey);
    return this.queries.amountOut;
  }

  async getIssuanceSupply() {
    const timerKey = '  ⏱️ Getting issuance supply (RPC)';
    console.time(timerKey);

    this.queries.issuanceSupply =
      await this.bondingCurve.read.getVirtualIssuanceSupply();
    console.timeEnd(timerKey);

    return this.queries.issuanceSupply;
  }

  async getInflows(token, recipient, fromTimestamp, toTimestamp) {
    const timerKey = '  ⏱️ Getting inflows (ANKR API)';
    console.time(timerKey);

    let transactions;

    let attempts = 0;
    for (let i = 0; i < 10; i++) {
      try {
        transactions = await this.ankrProvider.getTokenTransfers({
          address: recipient,
          fromTimestamp,
          toTimestamp,
          blockchain: this.networkIdString,
          pageSize: 10000,
        });
        break;
      } catch (e) {
        if (e.data.includes('context deadline exceeded')) {
          console.error('  ❌ Ankr API error, retrying...');
          attempts++;
        } else {
          throw e;
        }
      }
    }

    const inflows = transactions.transfers
      .filter(
        (tx) => tx.toAddress.toLowerCase() === recipient.toLowerCase()
      )
      .filter(
        (tx) =>
          tx.contractAddress.toLowerCase() === token.toLowerCase()
      )
      .map((tx) => {
        const {
          fromAddress,
          value,
          tokenDecimals,
          timestamp,
          transactionHash,
        } = tx;
        return {
          participant: fromAddress.toLowerCase(),
          contribution: parseUnits(value, tokenDecimals),
          timestamp,
          transactionHash,
        };
      })
      .sort((a, b) => a.timestamp - b.timestamp);

    this.queries.inflows = inflows;

    console.timeEnd(timerKey);
    return this.queries.inflows;
  }

  async getIssuanceToken() {
    const timerKey = '  ⏱️ Getting issuance token (RPC)';
    console.time(timerKey);
    this.queries.issuanceToken =
      await this.bondingCurve.read.getIssuanceToken();
    console.timeEnd(timerKey);
    return this.queries.issuanceToken;
  }

  async getSpotPrice() {
    const timerKey = '  ⏱️ Getting spot price (RPC)';
    console.time(timerKey);
    this.queries.spotPrice =
      await this.bondingCurve.read.getStaticPriceForBuying();
    console.timeEnd(timerKey);
    return this.queries.spotPrice;
  }

  async getNftHolders(token) {
    let holders;

    const timerKey = '  ⏱️ Getting NFT holders (ANKR API)';
    console.time(timerKey);

    let attempts = 0;
    for (let i = 0; i < 10; i++) {
      try {
        const x = await this.ankrProvider.getNFTHolders({
          blockchain: this.networkIdString,
          contractAddress: getAddress(token),
        });
        ({ holders } = x);
        break;
      } catch (e) {
        if (e.data.includes('context deadline exceeded')) {
          console.error('  ❌ Ankr API error, retrying...');
          attempts++;
        } else {
          throw e;
        }
      }
    }

    this.queries.nftHolders = holders.map((h) => h.toLowerCase());
    console.timeEnd(timerKey);
    return this.queries.nftHolders;
  }

  async getNftHoldersForInflows(token, inflows) {
    const timerKey = '  ⏱️ Getting NFT holders (RPC)';
    console.time(timerKey);
    const candidates = inflows.map((i) => i.participant);
    const holders = [];

    const nftContract = getContract({
      address: token,
      client: this.publicClient,
      abi: abis.nftAbi,
    });

    for (const candidate of candidates) {
      const balance = await nftContract.read.balanceOf([candidate]);
      if (balance > 0) {
        holders.push(candidate);
      }
    }
    console.timeEnd(timerKey);
    this.queries.nftHolders = [...new Set(holders)];
    return this.queries.nftHolders;
  }

  async getAllowlist() {
    const timerKey = '  ⏱️ Getting allowlist (QACC API)';
    console.time(timerKey);

    const {
      batchMintingEligibleUsers: { users },
    } = await this.backendConnector(queryBuilder.backend.allowlist());
    console.timeEnd(timerKey);
    return users;
  }

  async getIssuanceTokenFromWrapper() {
    const mintWrapper = getContract({
      address: this.queries.addresses.mintWrapper,
      client: this.publicClient,
      abi: abis.mintWrapperAbi,
    });

    try {
      return await mintWrapper.read.issuanceToken();
    } catch (e) {
      return this.queries.addresses.mintWrapper;
    }
  }

  /* 
    CONNECTORS
  */

  async getGraphQLConnector(url) {
    const connector = async (query) => {
      const response = await fetch(url, {
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
    };

    return connector;
  }

  async indexerConnector(query) {
    const connector = await this.getGraphQLConnector(this.indexerUrl);
    const data = await connector(query);
    return data;
  }

  async backendConnector(query) {
    const connector = await this.getGraphQLConnector(this.backendUrl);
    const data = await connector(query);
    return data;
  }

  /*
    UTILS
  */

  getNetworkIdString(chainId) {
    if (chainId == 11155111) {
      return 'eth_sepolia';
    } else if (chainId == 84532) {
      return 'base_sepolia';
    } else if (chainId == 1101) {
      return 'zkevm_sepolia';
    }
  }

  getAdvancedApiEndpoint(apiKey) {
    return `https://rpc.ankr.com/multichain/${apiKey}`;
  }
}
