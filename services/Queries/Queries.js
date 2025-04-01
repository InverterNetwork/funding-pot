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
import { NATIVE_TOKENS } from '../../config.js';
import { isNativeToken, isAxelarRelay } from '../../utils/helpers.js';

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
    this.queries.addresses.authorizer =
      await orchestrator.read.authorizer();
    this.queries.addresses.paymentProcessor =
      await orchestrator.read.paymentProcessor();
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
  async getFirstAdmin() {
    const authorizer = getContract({
      address: this.queries.addresses.authorizer,
      client: this.publicClient,
      abi: abis.authorizerAbi,
    });

    const firstAdmin = await authorizer.read.getRoleMember([
      '0x0000000000000000000000000000000000000000000000000000000000000000',
      0,
    ]);

    return firstAdmin;
  }

  async adminCount() {
    const authorizer = getContract({
      address: this.queries.addresses.authorizer,
      client: this.publicClient,
      abi: abis.authorizerAbi,
    });

    const adminCount = await authorizer.read.getRoleMemberCount([
      '0x0000000000000000000000000000000000000000000000000000000000000000',
    ]);

    return adminCount;
  }

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

    let data;
    let inflows;

    let attempts = 0;
    for (let i = 0; i < 10; i++) {
      try {
        if (isNativeToken(token)) {
          const response =
            await this.ankrProvider.getTransactionsByAddress({
              address: recipient,
              fromTimestamp,
              toTimestamp,
              blockchain: this.networkIdString,
              pageSize: 10000,
            });
          data = response.transactions;
          inflows = data
            .filter(
              (tx) => tx.to.toLowerCase() === recipient.toLowerCase()
            )
            .map((tx) => {
              return {
                participant: tx.from.toLowerCase(),
                contribution: BigInt(tx.value),
                timestamp: BigInt(tx.timestamp),
                transactionHash: tx.hash,
              };
            });
        } else {
          data = await this.ankrProvider.getTokenTransfers({
            address: recipient,
            fromTimestamp,
            toTimestamp,
            blockchain: this.networkIdString,
            pageSize: 10000,
          });

          inflows = data
            .filter(
              (tx) =>
                tx.toAddress.toLowerCase() === recipient.toLowerCase()
            )
            .filter(
              (tx) =>
                tx.contractAddress.toLowerCase() ===
                token.toLowerCase()
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
        }
        break;
      } catch (e) {
        console.log(e);
        if (e.data.includes('context deadline exceeded')) {
          console.error('  ❌ Ankr API error, retrying...');
          attempts++;
        } else {
          throw e;
        }
      }
    }

    for (const inflow of inflows) {
      if (isAxelarRelay(inflow.participant)) {
        inflow.participant = await this.lookupTransaction(
          inflow.transactionHash
        );
      }
    }

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

  async getAllowlists() {
    const timerKey = '  ⏱️ Getting allowlists (QACC API)';
    console.time(timerKey);
    const {
      batchMintingEligibleUsersV2: { users },
    } = await this.backendConnector(
      queryBuilder.backend.allowlists()
    );
    console.timeEnd(timerKey);

    const privadoAllowlist = [];
    const gitcoinAllowlist = [];

    for (const user of users) {
      if (user.kycType === 'zkId') {
        privadoAllowlist.push(user.address);
      } else if (user.kycType === 'GTCPass') {
        gitcoinAllowlist.push(user.address);
      }
    }

    this.queries.allowlists = {
      privadoAllowlist,
      gitcoinAllowlist,
    };

    return this.queries.allowlists;
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

  async balanceOf(token, address) {
    const tokenContract = getContract({
      address: token,
      client: this.publicClient,
      abi: abis.erc20Abi,
    });
    return await tokenContract.read.balanceOf([address]);
  }

  async feesCollected() {
    const fundingManager = getContract({
      address: this.queries.addresses.bondingCurve,
      client: this.publicClient,
      abi: abis.bondingCurveAbi,
    });
    return await fundingManager.read.projectCollateralFeeCollected();
  }

  async lookupTransaction(txHash) {
    if (!txHash.startsWith('0x')) {
      throw new Error('Transaction hash must start with 0x');
    }

    const axelarBody = { size: 1, txHash };
    try {
      // Axelar API call
      const axelarResponse = await axios.post(
        AXELAR_API,
        axelarBody,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );

      if (
        axelarResponse.data.data &&
        axelarResponse.data.data.length > 0
      ) {
        const from = axelarResponse.data.data[0].call.receipt.from;
        console.log(`Transaction found in Axelar: ${from}`);
        return from;
      }
    } catch (error) {
      console.log(error);
      console.log(`Not found in Axelar: ${txHash}`);
    }

    try {
      // Squid API call
      const squidResponse = await axios.post(
        SQUID_API,
        { hash: txHash },
        {
          headers: {
            'Content-Type': 'application/json',
            'x-integrator-id': CONFIG.integratorId,
          },
        }
      );

      if (squidResponse.data) {
        const from = squidResponse.data.fromAddress;
        console.log(`Transaction found in Squid: ${from}`);
        return from;
      }
    } catch (error) {
      console.log(`Not found in Squid: ${txHash}`);
    }

    // Fallback to on-chain receipt
    try {
      return getTxReceipt(txHash);
    } catch (error) {
      console.log('Error in getting from tx Receipt', txHash);
    }
    return null;
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
      return 'polygon_zkevm';
    } else if (chainId == 80002) {
      return 'polygon_amoy';
    } else if (chainId == 137) {
      return 'polygon';
    }
  }

  getAdvancedApiEndpoint(apiKey) {
    return `https://rpc.ankr.com/multichain/${apiKey}`;
  }
}
