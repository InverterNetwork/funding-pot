import '../../env.js';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  createPublicClient,
  createWalletClient,
  http,
  getContract,
  toHex,
  decodeEventLog,
  parseUnits,
  formatUnits,
} from 'viem';
import { privateKeyToAccount } from 'viem/accounts';
import ProtocolKit, { SafeFactory } from '@safe-global/protocol-kit';
import SafeApiKit from '@safe-global/api-kit';
import { ethers } from 'ethers';
import { Inverter } from '@inverter-network/sdk';

import { WITH_PROPOSING } from '../../config.js';

import {
  projectConfig,
  allowlist,
  deployArgs,
  requestedModules,
  restrictedPimFactory,
  mockCollateralToken,
} from './staticTestData.js';
import abis from '../../data/abis.js';
import { getChain, mockAllowlist } from './testHelpers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseConfig = {
  chain: getChain(process.env.CHAIN_ID),
  transport: http(process.env.RPC_URL),
};
export const clients = {
  owner: {
    publicClient: createPublicClient({
      ...baseConfig,
      account: privateKeyToAccount(process.env.PK),
    }),
    walletClient: createWalletClient({
      ...baseConfig,
      account: privateKeyToAccount(process.env.PK),
    }),
  },
  delegate: {
    publicClient: createPublicClient({
      ...baseConfig,
      account: privateKeyToAccount(process.env.DELEGATE),
    }),
    walletClient: createWalletClient({
      ...baseConfig,
      account: privateKeyToAccount(process.env.DELEGATE),
    }),
  },
};

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const deployTestSafe = async () => {
  const wallet = new ethers.Wallet(process.env.PK);
  const ownerAccount = privateKeyToAccount(process.env.PK);
  const delegateAccount = privateKeyToAccount(process.env.DELEGATE);

  const safeFactory = await SafeFactory.init({
    provider: process.env.RPC_URL,
    signer: process.env.PK,
  });

  const safeAccountConfig = {
    owners: [ownerAccount.address],
    threshold: 1,
  };

  console.info('> Deploying Safe...');

  const protocolKit = await safeFactory.deploySafe({
    safeAccountConfig,
    saltNonce: toHex(Date.now()),
  });

  const safeAddress = await protocolKit.getAddress();

  console.info('✅ Safe deployed at:', safeAddress);

  console.info(
    '🕒 Waiting for 5 seconds for SAFE API to index new safe...'
  );
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (WITH_PROPOSING) {
    const apiKit = new SafeApiKit.default({
      chainId: process.env.CHAIN_ID,
    });

    console.info(
      `> Adding delegate ${delegateAccount.address} to safe ${safeAddress}...`
    );

    await apiKit.addSafeDelegate({
      delegateAddress: delegateAccount.address,
      delegatorAddress: ownerAccount.address,
      safeAddress: safeAddress,
      signer: wallet,
      label: 'round-proposer',
    });

    console.info('✅ Delegate added');
  }

  return safeAddress;
};

export const deployWorkflowViaFactory = async (
  safeAddress,
  owner
) => {
  const { publicClient, walletClient } = owner;
  const inverterSdk = new Inverter({ publicClient, walletClient });
  const args = deployArgs(safeAddress, safeAddress);

  const tokenInstance = getContract({
    address: args.fundingManager.collateralToken,
    client: walletClient,
    abi: abis.erc20Abi,
  });

  console.info('> Approving collateral token to factory...');
  const tx1 = await tokenInstance.write.approve([
    restrictedPimFactory,
    parseUnits(
      args.fundingManager.bondingCurveParams.initialCollateralSupply,
      18
    ),
  ]);

  await publicClient.waitForTransactionReceipt({ hash: tx1 });
  console.info(`✅ Collateral token approved: ${tx1}`);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.info('> Adding funding to factory...');
  const factory = getContract({
    abi: abis.restrictedPimFactoryAbi,
    address: restrictedPimFactory,
    client: walletClient,
  });
  const tx2 = await factory.write.addFunding([
    walletClient.account.address,
    safeAddress,
    safeAddress,
    mockCollateralToken,
    parseUnits(
      args.fundingManager.bondingCurveParams.initialCollateralSupply,
      18
    ),
  ]);
  await publicClient.waitForTransactionReceipt({ hash: tx2 });
  console.info(`✅ Funding added: ${tx2}`);

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.info('> Deploying workflow through restricted factory...');
  const { run } = await inverterSdk.getDeploy({
    requestedModules,
    factoryType: 'restricted-pim',
  });

  const { orchestratorAddress } = await run(args);
  console.info(`✅ Workflow deployed: ${orchestratorAddress}`);

  return orchestratorAddress;

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.info(
    '> Setting additional admin... (for testing purposes)'
  );
  const workflow = await inverterSdk.getWorkflow({
    orchestratorAddress,
  });
  const adminRole = await workflow.authorizer.read.getAdminRole.run();
  const tx3 = await workflow.authorizer.write.grantRole.run([
    adminRole,
    safeAddress,
  ]);
  await publicClient.waitForTransactionReceipt({ hash: tx3 });
  console.info('✅ Safe set as workflow admin');

  await new Promise((resolve) => setTimeout(resolve, 5000));

  console.info(
    '> Setting safe as token admin (for testing purposes)'
  );
  const mintWrapper =
    await workflow.fundingManager.read.getIssuanceToken.run();
  const mintWrapperContract = getContract({
    abi: abis.mintWrapperAbi,
    address: mintWrapper,
    client: walletClient,
  });
  const tx4 = await mintWrapperContract.write.transferOwnership([
    safeAddress,
  ]);
  await publicClient.waitForTransactionReceipt({ hash: tx4 });
  console.info('✅ Safe set as mint wrapper admin');

  await new Promise((resolve) => setTimeout(resolve, 5000));

  return orchestratorAddress;
};

export const getBatchConfig = async (
  safe,
  matchingFunds,
  projectConfig
) => {
  const season = '2';
  const minContribution = 1_000_000_000_000_000;
  const maxContribution = 5_000_000_000_000_000;
  const individualLimit = '5000';
  const individualLimit2 = '500';
  const totalLimit = '300000';
  const price = '0.37';
  const isMockToken = false;

  let batchConfig;
  try {
    if (
      projectConfig.BATCH_CONFIGS &&
      projectConfig.BATCH_CONFIGS[3]
    ) {
      console.info('🥳 Batch config already exists');
      return projectConfig.BATCH_CONFIGS[3];
    }
  } catch (e) {
    console.log(e);
    console.info(
      '❗ No batch config found, setting up new e2e environment...'
    );
  }

  batchConfig = {
    VESTING_DETAILS: {},
    TIMEFRAME: {},
    LIMITS: {},
  };

  const { owner, delegate } = clients;

  const fromBlock = await owner.publicClient.getBlock();
  const fromTimestamp = fromBlock.timestamp - 60n;
  batchConfig.TIMEFRAME.FROM_TIMESTAMP = fromTimestamp.toString();
  batchConfig.VESTING_DETAILS.START = (
    fromTimestamp + 60n
  ).toString();
  batchConfig.VESTING_DETAILS.CLIFF = '60';
  batchConfig.VESTING_DETAILS.END = (fromTimestamp + 120n).toString();
  batchConfig.LIMITS.INDIVIDUAL = individualLimit;
  batchConfig.LIMITS.INDIVIDUAL_2 = individualLimit2;
  batchConfig.LIMITS.TOTAL = totalLimit;
  batchConfig.PRICE = price;

  batchConfig.IS_EARLY_ACCESS = false;

  if (matchingFunds > 0 && isMockToken) {
    console.info('> Minting matching funds...');
    await mintMockTokens(
      mockCollateralToken,
      parseUnits(matchingFunds, 18),
      safe,
      delegate.walletClient,
      delegate.publicClient
    );
  }

  console.info(
    '> Minting collateral tokens to contributors (so that they can contribute)...'
  );

  const contributors = [owner, delegate];

  const contributions = [];

  for (let i = 0; i < contributors.length; i++) {
    const contributor = contributors[i];
    const { publicClient, walletClient } = contributor;
    const contribution = randomIntFromInterval(
      minContribution,
      maxContribution
    );

    console.info(
      `🎲 Randomized contribution for ${walletClient.account.address}: ${contribution}`
    );
    contributions.push(contribution);

    const hash = await walletClient.sendTransaction({
      to: safe,
      value: contribution,
    });

    const receipt = await publicClient.waitForTransactionReceipt({
      hash,
    });

    const b = await publicClient.getBlock(receipt.blockNumber);

    console.info('✅ Contribution sent at timestamp: ', b.timestamp);

    continue;

    await mintMockTokens(
      mockCollateralToken,
      contribution,
      walletClient.account.address,
      delegate.walletClient,
      delegate.publicClient
    );

    const tokenInstance = getContract({
      address: mockCollateralToken,
      client: contributor.walletClient,
      abi: abis.erc20Abi,
    });

    console.info(
      `> Sending contribution ${contributions[i]} to safe...`
    );

    const tx = await tokenInstance.write.transfer([
      safe,
      contributions[i],
    ]);

    const { blockNumber } =
      await publicClient.waitForTransactionReceipt({
        hash: tx,
      });
    const block = await publicClient.getBlock(blockNumber);

    console.info(
      '✅ Contribution sent at timestamp: ',
      block.timestamp
    );

    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  const toBlock = await owner.publicClient.getBlock();
  const toTimestamp = toBlock.timestamp + 60n;
  batchConfig.TIMEFRAME.TO_TIMESTAMP = toTimestamp.toString();

  projectConfig.BATCH_CONFIGS = { 3: batchConfig };
  const filePath = path.join(
    __dirname,
    '../../data/test/input/projects.json'
  );

  fs.writeFileSync(
    filePath,
    JSON.stringify(
      { GENERATED_TEST_PROJECT: projectConfig },
      null,
      2
    ),
    'utf8'
  );

  console.info(
    `💾 Batch config stored to data/test/input/batches/s${season}/3.json`
  );

  return { batchConfig, contributions, contributors };
};

export const getProjectConfig = async (owner, safe) => {
  const { delegate } = clients;

  const filePath = path.join(
    __dirname,
    '../../data/test/input/projects.json'
  );

  let projectsConfig;

  try {
    projectsConfig = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, `../../data/test/input/projects.json`)
      )
    );
  } catch (e) {}

  if (projectsConfig && projectsConfig.GENERATED_TEST_PROJECT) {
    console.info('🥳 Project config already exists');
    return projectsConfig.GENERATED_TEST_PROJECT;
  } else {
    console.info(
      '❗ No project config found, setting up new e2e environment...'
    );

    const safeAddress = await deployTestSafe();
    const orchestratorAddress = await deployWorkflowViaFactory(
      safeAddress,
      owner
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(
        {
          ...projectsConfig,
          GENERATED_TEST_PROJECT: {
            SAFE: safeAddress,
            ORCHESTRATOR: orchestratorAddress,
            NFT: projectConfig.NFT,
            MATCHING_FUNDS: '0',
          },
        },
        null,
        2
      ),
      'utf8'
    );

    console.info('✅ All contracts deployed');
    console.info(
      '💾 Project with name GENERATED_TEST_PROJECT saved to data/test/input/projects.json'
    );
  }

  return JSON.parse(fs.readFileSync(filePath)).GENERATED_TEST_PROJECT;
};

export const setupForE2E = async () => {
  const { owner } = clients;
  const projectConfig = await getProjectConfig(owner);
  const { SAFE, MATCHING_FUNDS } = projectConfig;
  await getBatchConfig(SAFE, MATCHING_FUNDS, projectConfig);
};

export const signAndExecutePendingTxs = async (safeAddress) => {
  const apiKit = new SafeApiKit.default({
    chainId: process.env.CHAIN_ID,
  });
  const protocolKit = await ProtocolKit.default.init({
    signer: process.env.PK,
    provider: process.env.RPC_URL,
    safeAddress: safeAddress,
  });
  const pendingTxs = await apiKit.getPendingTransactions(safeAddress);

  for (const tx of pendingTxs.results) {
    const { safeTxHash } = tx;
    const signature = await protocolKit.signHash(safeTxHash);
    await apiKit.confirmTransaction(safeTxHash, signature.data);
  }

  const receipts = [];

  for (const tx of pendingTxs.results) {
    const { safeTxHash } = tx;
    const safeTransaction = await apiKit.getTransaction(safeTxHash);
    const executeTxResponse = await protocolKit.executeTransaction(
      safeTransaction
    );
    const receipt =
      executeTxResponse.transactionResponse &&
      (await executeTxResponse.transactionResponse.wait());

    receipts.push(receipt);
  }

  return receipts;
};

export const getVestings = async (txHash) => {
  const {
    owner: { publicClient },
  } = clients;

  const receipt = await publicClient.getTransactionReceipt({
    hash: txHash,
  });

  const eventLogs = receipt.logs.map((log) => {
    try {
      // Step 3: Attempt to decode the log using the ABI and event name
      return decodeEventLog({
        abi: abis.streamingProcessorAbi,
        data: log.data,
        topics: log.topics,
      });
    } catch (error) {
      // If log doesn't match the event type, return null
      return null;
    }
  });

  const filtered = eventLogs.filter(
    (log) => log !== null && log.eventName === 'StreamingPaymentAdded'
  );

  return filtered.map((f) => f.args);
};

export const mintMockTokens = async (
  token,
  amount,
  to,
  walletClient,
  publicClient
) => {
  const tokenInstance = getContract({
    address: token,
    client: walletClient,
    abi: abis.erc20Abi,
  });

  // HERE: error thrown
  const nonce = await publicClient.getTransactionCount({
    address: walletClient.account.address,
  });

  const hash = await tokenInstance.write.mint([to, amount], {
    nonce: nonce,
  });
  console.info(`> Minting ${amount} tokens (${token}) to ${to}...`);
  await publicClient.waitForTransactionReceipt({ hash });
  console.info(`✅ Tokens minted: ${hash}`);
  await new Promise((resolve) => setTimeout(resolve, 5000));
};

export const getReport = (projectName, batchNr) => {
  const filePath = path.join(
    __dirname,
    `../../data/test/output/${projectName}/${batchNr}.json`
  );

  const report = JSON.parse(fs.readFileSync(path.join(filePath)));

  return report;
};
