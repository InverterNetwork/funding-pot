export const defineBatch = async ({
  queryService,
  batchService,
  projectConfig,
  batchConfig,
}) => {
  const {
    TIMEFRAME,
    ALLOWLIST,
    VESTING_SPECS: { START, CLIFF, END },
  } = batchConfig;
  const {
    SAFE,
    ISSUANCE_TOKEN,
    COLLATERAL_TOKEN,
    NFT,
    PAYMENT_ROUTER,
    BONDING_CURVE,
  } = projectConfig[PROJECT_NAME];
  // get timeframe
  const { startBlock, endBlock } = await queryService.getTimeframe({
    ...TIMEFRAME,
    address: SAFE,
  });

  // get inflows
  const inflowsData = await queryService.getInflows(
    COLLATERAL_TOKEN,
    SAFE,
    startBlock,
    endBlock
  );

  // add relevant metadata
  batchService.addMetadata({
    safe: SAFE,
    issuanceToken: ISSUANCE_TOKEN,
    collateralToken: COLLATERAL_TOKEN,
    nft: NFT,
    bondingCurve: BONDING_CURVE,
  });

  // add inflows to batch service
  batchService.addInflows(inflowsData);

  // get addresses eligible for contribution
  const eligibleAddresses = ALLOWLIST;

  // earmark eligible addresses
  batchService.checkEligibility(eligibleAddresses);

  // calculate actual contributions taking into account the individual contribution cap
  const contributors = batchService.getContributors();
  const exAnteBalances = await queryService.getBalances(
    ISSUANCE_TOKEN,
    contributors
  );
  const exAnteIssuanceSupply = await queryService.getIssuanceSupply();
  const exAnteSpotPrice = await queryService.getSpotPrice();
  batchService.calculateValidContributions(
    exAnteIssuanceSupply,
    exAnteBalances,
    exAnteSpotPrice
  );

  // calculate aggregate contribution data
  batchService.calculateAggregateContributions();

  // get amountOut based on aggregate valid contributions
  const additionalIssuance = await queryService.getAmountOut(
    batchService.data.totalValidContributions
  );

  // calculate allocations
  batchService.calculateAllocations(additionalIssuance);

  // add vesting specs
  batchService.addVestingSpecs({
    paymentRounter: PAYMENT_ROUTER,
    start: START,
    cliff: CLIFF,
    end: END,
  });
};
