import '../../../env.js';

import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import { getContract, decodeEventLog } from 'viem';
import { encodeSingle, TransactionType } from 'ethers-multisend';

import { setupRoles } from './setupRoles.js';
import abis from '../../../data/abis.js';
import {
  clients,
  getProjectConfig,
  signAndExecutePendingTxs,
} from '../../testUtils/e2eSetup.js';
import { Inverter } from '@inverter-network/sdk';

describe('#setupRoles', () => {
  let rolesModule,
    projectConfig,
    withdrawableFees,
    feeClaimer,
    feeRecipient,
    fundingManagerAddress;

  // deploy roles module, configure it, propose respective txs to safe and execute them
  before(async () => {
    ({ owner: feeRecipient, delegate: feeClaimer } = clients);

    projectConfig = await getProjectConfig(clients.owner);

    ({ withdrawableFees, fundingManagerAddress } =
      await getTransactionParams(projectConfig.ORCHESTRATOR));

    if (withdrawableFees === 0n) {
      throw new Error(
        'No withdrawable fees found, run main.e2e.test.js first to generate fees'
      );
    }

    const feeClaimerAddress = feeClaimer.walletClient.account.address;
    const feeRecipientAddress =
      feeRecipient.walletClient.account.address;
    const admin = projectConfig.SAFE;
    const orchestrator = projectConfig.ORCHESTRATOR;

    rolesModule = await setupRoles(
      admin,
      orchestrator,
      feeClaimerAddress,
      feeRecipientAddress
    );

    await signAndExecutePendingTxs(projectConfig.SAFE);

    await assignAdminRole(orchestrator, clients.owner, admin);
  });

  it('lets fee claimer claim fees', async () => {
    const rolesModuleInstance = getContract({
      address: rolesModule,
      abi: abis.rolesAbi,
      client: feeClaimer.walletClient,
    });

    const encoded = encodeSingle({
      type: TransactionType.callContract,
      id: '0',
      to: fundingManagerAddress,
      value: '0',
      abi: abis.bondingCurveAbi,
      functionSignature:
        'withdrawProjectCollateralFee(address,uint256)',
      inputValues: [
        feeRecipient.walletClient.account.address,
        withdrawableFees,
      ],
    });

    const tx =
      await rolesModuleInstance.write.execTransactionFromModule(
        [encoded.to, 0, encoded.data, 0],
        { gas: 1000000n }
      );

    const receipt =
      await feeClaimer.publicClient.waitForTransactionReceipt({
        hash: tx,
      });

    assertSuccess(receipt);
  });
});

const getTransactionParams = async (orchestratorAddress) => {
  const orchestratorInstance = getContract({
    address: orchestratorAddress,
    abi: abis.orchestratorAbi,
    client: clients.delegate.walletClient,
  });
  const fundingManagerAddress =
    await orchestratorInstance.read.fundingManager();
  const bondingCurveInstance = getContract({
    address: fundingManagerAddress,
    abi: abis.bondingCurveAbi,
    client: clients.delegate.walletClient,
  });
  const withdrawableFees =
    await bondingCurveInstance.read.projectCollateralFeeCollected();

  return { withdrawableFees, fundingManagerAddress };
};

const assignAdminRole = async (
  orchestratorAddress,
  { walletClient, publicClient },
  safeAddress
) => {
  const inverter = new Inverter({ walletClient, publicClient });
  const workflow = await inverter.getWorkflow({
    orchestratorAddress,
  });
  const adminRole = await workflow.authorizer.read.getAdminRole.run();
  const tx = await workflow.authorizer.write.grantRole.run([
    adminRole,
    safeAddress,
  ]);
  await publicClient.waitForTransactionReceipt({
    hash: tx,
  });
};

const assertSuccess = (receipt) => {
  const eventLogs = receipt.logs.map((log) => {
    try {
      // Step 3: Attempt to decode the log using the ABI and event name
      return decodeEventLog({
        abi: abis.bondingCurveAbi,
        data: log.data,
        topics: log.topics,
      });
    } catch (error) {
      // If log doesn't match the event type, return null
      return null;
    }
  });

  const filtered = eventLogs.filter(
    (log) =>
      log !== null &&
      log.eventName === 'ProjectCollateralFeeWithdrawn'
  );

  assert(filtered.length > 0, 'Expected 1 event log');
};
