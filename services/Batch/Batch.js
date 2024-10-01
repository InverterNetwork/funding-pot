import { formatUnits, parseUnits } from 'viem';

export class Batch {
  config;
  data;

  constructor({ batchConfig, batchReports }) {
    const isEarlyAccess = batchConfig.IS_EARLY_ACCESS;
    const individualLimit = parseUnits(
      batchConfig.LIMITS.INDIVIDUAL,
      18
    );
    // since batch caps are accumulative, if it is not the very first batch
    // we need to consider how much was already contributed in previous batches
    let totalBatchLimit = parseUnits(batchConfig.LIMITS.TOTAL, 18);
    for (const reportNr in batchReports) {
      const report = batchReports[reportNr];
      totalBatchLimit -= BigInt(report.totalValidContribution);
    }
    const totalLimit = totalBatchLimit;

    this.config = { totalLimit, individualLimit, isEarlyAccess };
    this.data = {};
  }

  assessInflows(inflows, allowlist, nftHolders) {
    this.data.totalContribution = 0n;
    this.data.totalValidContribution = 0n;
    this.data.totalInvalidContribution = 0n;
    this.data.participants = {};

    // iterate over the inflows
    for (const inflow of inflows) {
      const { participant, contribution } = inflow;

      // adds contribution to participants
      this.createOrAddContribution(inflow);

      // if the inflow is not on the allowlist, everything is invalid contribution
      // OR if it's an early access batch and the participant is not an NFT holder
      if (
        !allowlist.includes(participant) ||
        (this.config.isEarlyAccess &&
          !nftHolders.includes(participant))
      ) {
        this.manageContribution(inflow, {
          invalidContribution: contribution,
        });
        continue;
      }

      const p = this.data.participants[participant];
      const prevValid = p ? p.validContribution || 0n : 0n;

      // optimistic assumption to be challenged in the next steps
      let validContribution = contribution,
        invalidContribution = 0n;

      // difference between individual cap and own contribution
      // if negative, means that the individual cap has been exceeded
      const individualDiff =
        this.config.individualLimit - (prevValid + contribution);

      // means that the individual cap has been exceeded
      if (individualDiff < 0n) {
        // set valid contribution to difference between individual cap and own contributions
        validContribution = validContribution + individualDiff;
        // set invalid contribution to the difference between the individual cap and own contribution
        invalidContribution = individualDiff * -1n; //
      }

      // difference between total cap and own contribution
      // if negative, means that the total cap has been exceeded
      const totalDiff =
        this.config.totalLimit -
        this.data.totalValidContribution -
        (prevValid + contribution);

      // means that the total cap has been exceeded
      if (totalDiff < 0n) {
        // what is the invalid amount with respect to the total cap
        const e = totalDiff * -1n;
        // what is the valid amount with respect to the total cap
        const v = prevValid + contribution - e;
        // check which is more restrictive: the individual cap or the total cap
        const isMoreRestrictive = v < validContribution;
        // if total cap is more restrictive, overwrite valid contribution according to the total cap limit
        validContribution = isMoreRestrictive ? v : validContribution;
        // if total cap is more restrictive, overwrite invalid contribution according to the total cap limit
        invalidContribution = isMoreRestrictive
          ? e
          : invalidContribution;
      }

      // add valid and invalid contribution to participant
      this.manageContribution(inflow, {
        validContribution,
        invalidContribution,
      });
    }
  }

  calcAllocations(amountOut) {
    this.data.additionalIssuance = amountOut;

    const {
      totalValidContribution,
      additionalIssuance,
      participants,
    } = this.data;

    const totalValidContributionFloat = this.bigIntToFloat(
      totalValidContribution
    );
    const additionalIssuanceFloat = this.bigIntToFloat(
      additionalIssuance
    );

    for (const address of Object.keys(participants)) {
      const { validContribution } = participants[address];
      if (!validContribution) continue;

      const validContributionFloat =
        this.bigIntToFloat(validContribution);

      const contributionShare =
        validContributionFloat / totalValidContributionFloat;
      const issuanceAllocation =
        Math.floor(
          contributionShare * additionalIssuanceFloat * 10000
        ) / 10000;
      this.data.participants[address].issuanceAllocation =
        this.floatToBigInt(issuanceAllocation);
    }
  }

  // INTERNAL HELPER FUNCTIONS

  manageContribution(inflow, contributionObj) {
    const { participant, contribution, transactionHash } = inflow;

    const { invalidContribution, validContribution } =
      contributionObj;

    const adjustedInvalidContribution = invalidContribution || 0n;
    const adjustedValidContribution = validContribution || 0n;

    if (!this.data.participants[participant].invalidContribution) {
      this.data.participants[participant].invalidContribution =
        adjustedInvalidContribution;
    } else {
      this.data.participants[participant].invalidContribution +=
        adjustedInvalidContribution;
    }

    if (!this.data.participants[participant].validContribution) {
      this.data.participants[participant].validContribution =
        adjustedValidContribution;
    } else {
      this.data.participants[participant].validContribution +=
        adjustedValidContribution;
    }

    this.data.totalInvalidContribution += adjustedInvalidContribution;
    this.data.totalValidContribution += adjustedValidContribution;

    const lastTxIdx =
      this.data.participants[participant].transactions.length - 1;
    this.data.participants[participant].transactions[lastTxIdx] = {
      ...this.data.participants[participant].transactions[lastTxIdx],
      invalidContribution,
      validContribution,
    };
  }

  createOrAddContribution(inflow) {
    const { participant, contribution, transactionHash } = inflow;
    if (!this.data.participants[participant]) {
      this.data.participants[participant] = {
        contribution,
        transactions: [{ transactionHash, contribution }],
      };
    } else {
      this.data.participants[participant].contribution +=
        contribution;
      this.data.participants[participant].transactions.push({
        transactionHash,
        contribution,
      });
    }
    this.data.totalContribution += contribution;
  }

  // GETTERS

  getAllocations() {
    const { participants } = this.data;
    return Object.entries(participants)
      .filter(([, data]) => data.issuanceAllocation)
      .map(([address, data]) => {
        return {
          recipient: address,
          amount: data.issuanceAllocation,
        };
      });
  }

  // STATIC

  bigIntToFloat(bigInt) {
    return parseFloat(formatUnits(bigInt, 18));
  }

  floatToBigInt(float) {
    return parseUnits(float.toString(), 18);
  }

  diffOrZero(a, b) {
    return a - b > 0n ? a - b : 0n;
  }
}
