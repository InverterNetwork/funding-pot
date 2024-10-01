import '../env.js';

import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import {
  setupForE2E,
  signAndExecutePendingTxs,
  getVestings,
  getReport,
} from '../utils/testUtils/testHelpers.js';

import { main } from './main.js';
import { loadInputs } from './01_loadInputs/01_loadInputs.js';

describe('#main', () => {
  const batchNr = '3';
  const projectName = 'GENERATED_TEST_PROJECT';

  let safeAddress;

  before(async () => {
    await setupForE2E();

    console.info(
      '🕒 Waiting for 5 seconds for ANKR API to catch up...'
    );
    await new Promise((resolve) => setTimeout(resolve, 5000));

    const {
      projectConfig: { SAFE },
    } = loadInputs(projectName, batchNr);

    safeAddress = SAFE;
  });

  it('creates vestings for eligible contributors', async () => {
    await main(projectName, batchNr);

    const [txReceipt] = await signAndExecutePendingTxs(safeAddress);
    const vestings = await getVestings(txReceipt.hash);
    const report = await getReport(projectName, batchNr);
    const { participants } = report.batch;
    for (const address in participants) {
      const { issuanceAllocation } = participants[address];
      if (!issuanceAllocation) continue;
      const found = !!vestings.find((vesting) => {
        return vesting.amount.toString() === issuanceAllocation;
      });
      assert.ok(found);
    }
  });
});
