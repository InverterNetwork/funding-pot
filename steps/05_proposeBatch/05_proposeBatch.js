export const proposeBatch = async ({
  queryService,
  batchService,
  transactionBuilderService,
  safeService,
}) => {
  const { totalValidContribution, additionalIssuance } =
    batchService.data;
  const { collateralToken, bondingCurve } =
    queryService.queries.addresses;
  batchService.getAllocations();

  // approve token
  transactionBuilderService.approve(
    collateralToken,
    bondingCurve,
    totalValidContribution
  );

  // add batch buy tx
  transactionBuilderService.buy(totalValidContribution);

  // send issuance tokens to payment router˚
  transactionBuilderService.transferTokens(
    queryService.queries.addresses.issuanceToken,
    queryService.queries.addresses.paymentRouter,
    additionalIssuance
  );

  // get parsed allocations
  const allocations = await batchService.getAllocations();

  // add vesting txs
  transactionBuilderService.createVestings(allocations);

  // get encoded tx batches from transaction service
  const txBatches = transactionBuilderService.getEncodedTxBatches();

  // propose tx batches
  await safeService.proposeTxs(txBatches);
};
