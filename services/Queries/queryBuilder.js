export const queryBuilder = {
  indexer: {
    lastBuyBlocknumber: (address, chainId) => {
      return `
    {
        Swap(
            where: {initiator: {_eq: "${address}"}, swapType: {_eq: "BUY"}, chainId: {_eq: ${chainId}}}
            order_by: {blockTimestamp: desc}
            limit: 1
        ) {
            id
            blockTimestamp
        }
    }`;
    },
    vestings: (chainId, orchestratorAddress) => {
      return `{
        LinearVesting(where: {chainId: {_eq: ${chainId}}, streamingPaymentProcessor: {workflow_id: {_eq: "${orchestratorAddress}"}}}) {
          amountRaw
          recipient
        }
      }`;
    },
  },
  backend: {
    allowlist: () => `{
      batchMintingEligibleUsers(limit:3000, skip:0) {
        users
      }
    }`,
    allowlists: () => `{
      batchMintingEligibleUsersV2(limit:3000, skip:0) {
        users {
          address
          kycType
        }
        total
        skip
      }
    }`,
  },
};
