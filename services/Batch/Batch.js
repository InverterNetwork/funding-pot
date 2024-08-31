import { formatUnits, parseUnits } from 'viem';

export class Batch {
  data;
  relativeCap;

  constructor() {
    this.relativeCap = 0.02;
  }

  // STATE-MODIFYING METHODS

  addInflows(inflows) {
    this.data = { participants: inflows };
  }

  checkEligibility(qualifiedAddresses) {
    const { participants } = this.data;
    for (const address of Object.keys(participants)) {
      if (!qualifiedAddresses.includes(address)) {
        this.data.participants[address] = {
          ...participants[address],
          permitted: false,
        };
      } else {
        this.data.participants[address] = {
          ...participants[address],
          permitted: true,
        };
      }
    }
  }

  calculateAggregateContributions() {
    const { participants } = this.data;

    const totalValidContributions = Object.entries(
      participants
    ).reduce((acc, [, data]) => {
      return data.validContribution
        ? acc + data.validContribution
        : acc;
    }, 0n);
    const totalExcessContributions = Object.entries(
      participants
    ).reduce((acc, [, data]) => {
      return data.excessContribution
        ? acc + data.excessContribution
        : acc;
    }, 0n);
    this.data = {
      totalValidContributions,
      totalExcessContributions,
      ...this.data,
    };
  }

  calculateValidContributions(
    exAnteSupply,
    exAnteSpotPrice,
    exAnteBalances
  ) {
    // store exAnteSupply and exAnteSpotPrice
    this.data.exAnteSupply = exAnteSupply;
    this.data.exAnteSpotPrice = exAnteSpotPrice;

    // calculate individual and store individual cap
    this.data.issuanceTokenCap = parseUnits(
      (
        this.relativeCap * parseFloat(formatUnits(exAnteSupply, 18))
      ).toString(),
      18
    );

    const relSpotPrice = parseFloat(exAnteSpotPrice) / 100000;

    // calculate excess contribution and store
    for (const address of Object.keys(exAnteBalances)) {
      const { contribution, permitted } =
        this.data.participants[address];
      const exAnteBalance = exAnteBalances[address];
      const issuanceTokenPotential =
        this.data.issuanceTokenCap - exAnteBalance; // how many issuance token, the address may buy

      // if no more issuance token potential, all contributions are excess contributions
      if (issuanceTokenPotential <= 0n) {
        this.data.participants[address].excessContribution =
          contribution;
        continue;
      }

      // if user is not permitted, all contributions are excess contributions
      if (!permitted) {
        this.data.participants[address].excessContribution =
          contribution;
        continue;
      }

      // based on ex ante spot price, ex ante balance, and issuance token potential, calculate contribution potential
      // store per address
      const contributionPotentialFloat =
        this.bigIntToFloat(issuanceTokenPotential) * relSpotPrice;
      const contributionPotential = this.floatToBigInt(
        contributionPotentialFloat
      );

      // if contribution is larger than contribution potential
      // note excess contribution and actual contribution
      // if contribution is below contribution potential
      // all contributions are actual contributions
      if (contribution > contributionPotential) {
        const excess = contribution - contributionPotential;
        this.data.participants[address].excessContribution = excess;
        this.data.participants[address].validContribution =
          contributionPotential;
      } else {
        this.data.participants[address].validContribution =
          contribution;
      }
    }
  }

  calculateAllocations(amountOut) {
    this.data.additionalIssuance = amountOut;

    const {
      totalValidContributions,
      additionalIssuance,
      participants,
    } = this.data;

    const totalValidContributionFloat = this.bigIntToFloat(
      totalValidContributions
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

  addVestingDetails({ start, cliff, end }) {
    this.data.vestingDetails = { start, cliff, end };
  }

  addMetadata({
    safe,
    issuanceToken,
    collateralToken,
    nft,
    bondingCurve,
  }) {
    this.data.bondingCurve = bondingCurve;
    this.data.safe = safe;
    this.data.issuanceToken = issuanceToken;
    this.data.collateralToken = collateralToken;
    this.data.nft = nft;
  }

  // GETTERS

  getContributors() {
    return Object.keys(this.data.participants).filter(
      (address) => this.data.participants[address].permitted
    );
  }

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

  // UTILS

  bigIntToFloat(bigInt) {
    return parseFloat(formatUnits(bigInt, 18));
  }

  floatToBigInt(float) {
    return parseUnits(float.toString(), 18);
  }
}