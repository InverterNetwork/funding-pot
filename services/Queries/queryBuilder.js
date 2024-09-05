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
  blockExplorer: {
    erc20Transactions: (token, recipient, startBlock, endBlock) => {
      return {
        module: 'account',
        action: 'tokentx',
        contractaddress: token,
        address: recipient,
        startblock: startBlock,
        endblock: endBlock,
        offset: '2000',
        sort: 'asc',
        apikey: 'YourApiKeyToken',
      };
    },
    erc721Mints: (token, endBlock) => {
      return {
        module: 'account',
        action: 'tokennfttx',
        contractaddress: token,
        startblock: 0,
        address: '0x0000000000000000000000000000000000000000',
        endblock: endBlock,
        offset: '2000',
        sort: 'asc',
        apikey: 'YourApiKeyToken',
      };
    },
  },
  ankrAdvancedApi: {
    getNftHolders: (token) => {
      return JSON.stringify({
        id: 1,
        jsonrpc: '2.0',
        method: 'ankr_getNFTHolders',
        params: {
          blockchain: 'optimism_testnet',
          contractAddress: token,
          pageSize: 1000,
          pageToken: '0',
        },
      });
    },
  },
};
