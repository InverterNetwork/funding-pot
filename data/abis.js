export default {
  bondingCurveAbi: [
    {
      type: 'function',
      name: 'CURVE_INTERACTION_ROLE',
      inputs: [],
      outputs: [
        { name: '', type: 'bytes32', internalType: 'bytes32' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'buy',
      inputs: [
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '_minAmountOut',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'buyFee',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'buyFor',
      inputs: [
        {
          name: '_receiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '_minAmountOut',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'buyIsOpen',
      inputs: [],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'calculatePurchaseReturn',
      inputs: [
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'mintAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'calculateSaleReturn',
      inputs: [
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        {
          name: 'redeemAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'closeBuy',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'closeSell',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'formula',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IBancorFormula',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getIssuanceToken',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getReserveRatioForBuying',
      inputs: [],
      outputs: [{ name: '', type: 'uint32', internalType: 'uint32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getReserveRatioForSelling',
      inputs: [],
      outputs: [{ name: '', type: 'uint32', internalType: 'uint32' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getStaticPriceForBuying',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getStaticPriceForSelling',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getVirtualCollateralSupply',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'getVirtualIssuanceSupply',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'grantModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'grantModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'identifier',
      inputs: [],
      outputs: [
        { name: '', type: 'bytes32', internalType: 'bytes32' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'init',
      inputs: [
        {
          name: 'orchestrator_',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
        {
          name: 'metadata',
          type: 'tuple',
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
        {
          name: 'configData',
          type: 'bytes',
          internalType: 'bytes',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'isTrustedForwarder',
      inputs: [
        {
          name: 'forwarder',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'openBuy',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'openSell',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'orchestrator',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'projectCollateralFeeCollected',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'revokeModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revokeModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'sell',
      inputs: [
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '_minAmountOut',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'sellFee',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'sellIsOpen',
      inputs: [],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'sellTo',
      inputs: [
        {
          name: '_receiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_depositAmount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '_minAmountOut',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setBuyFee',
      inputs: [
        {
          name: '_fee',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setReserveRatioForBuying',
      inputs: [
        {
          name: '_reserveRatio',
          type: 'uint32',
          internalType: 'uint32',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setReserveRatioForSelling',
      inputs: [
        {
          name: '_reserveRatio',
          type: 'uint32',
          internalType: 'uint32',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setSellFee',
      inputs: [
        {
          name: '_fee',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setVirtualCollateralSupply',
      inputs: [
        {
          name: '_virtualSupply',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setVirtualIssuanceSupply',
      inputs: [
        {
          name: '_virtualSupply',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'supportsInterface',
      inputs: [
        {
          name: 'interfaceId',
          type: 'bytes4',
          internalType: 'bytes4',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'title',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'token',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IERC20',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transferOrchestratorToken',
      inputs: [
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'trustedForwarder',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'url',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'version',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'withdrawProjectCollateralFee',
      inputs: [
        {
          name: '_receiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_amount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'BuyFeeUpdated',
      inputs: [
        {
          name: 'newBuyFee',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'oldBuyFee',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BuyReserveRatioSet',
      inputs: [
        {
          name: 'newBuyReserveRatio',
          type: 'uint32',
          indexed: false,
          internalType: 'uint32',
        },
        {
          name: 'oldBuyReserveRatio',
          type: 'uint32',
          indexed: false,
          internalType: 'uint32',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BuyingDisabled',
      inputs: [],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'BuyingEnabled',
      inputs: [],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Initialized',
      inputs: [
        {
          name: 'version',
          type: 'uint64',
          indexed: false,
          internalType: 'uint64',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'IssuanceTokenSet',
      inputs: [
        {
          name: 'issuanceToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'decimals',
          type: 'uint8',
          indexed: false,
          internalType: 'uint8',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleInitialized',
      inputs: [
        {
          name: 'parentOrchestrator',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'metadata',
          type: 'tuple',
          indexed: false,
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OrchestratorTokenSet',
      inputs: [
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'decimals',
          type: 'uint8',
          indexed: false,
          internalType: 'uint8',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ProjectCollateralFeeWithdrawn',
      inputs: [
        {
          name: 'receiver',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ProtocolFeeMinted',
      inputs: [
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'treasury',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'feeAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ProtocolFeeTransferred',
      inputs: [
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'treasury',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'feeAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'SellFeeUpdated',
      inputs: [
        {
          name: 'newSellFee',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'oldSellFee',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'SellReserveRatioSet',
      inputs: [
        {
          name: 'newSellReserveRatio',
          type: 'uint32',
          indexed: false,
          internalType: 'uint32',
        },
        {
          name: 'oldSellReserveRatio',
          type: 'uint32',
          indexed: false,
          internalType: 'uint32',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'SellingDisabled',
      inputs: [],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'SellingEnabled',
      inputs: [],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'TokenDecimalsUpdated',
      inputs: [
        {
          name: 'oldDecimals',
          type: 'uint8',
          indexed: false,
          internalType: 'uint8',
        },
        {
          name: 'newDecimals',
          type: 'uint8',
          indexed: false,
          internalType: 'uint8',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'TokensBought',
      inputs: [
        {
          name: 'receiver',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'depositAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'receivedAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'buyer',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'TokensSold',
      inputs: [
        {
          name: 'receiver',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'depositAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'receivedAmount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'seller',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'TransferOrchestratorToken',
      inputs: [
        {
          name: '_to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: '_amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualCollateralAmountAdded',
      inputs: [
        {
          name: 'amountAdded',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualCollateralAmountSubtracted',
      inputs: [
        {
          name: 'amountSubtracted',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualCollateralSupplySet',
      inputs: [
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'oldSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualIssuanceAmountAdded',
      inputs: [
        {
          name: 'amountAdded',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualIssuanceAmountSubtracted',
      inputs: [
        {
          name: 'amountSubtracted',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'VirtualIssuanceSupplySet',
      inputs: [
        {
          name: 'newSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'oldSupply',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'AddressEmptyCode',
      inputs: [
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'AddressInsufficientBalance',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    { type: 'error', name: 'FailedInnerCall', inputs: [] },
    {
      type: 'error',
      name: 'InvalidInitialization',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module_OrchestratorCallbackFailed',
      inputs: [
        {
          name: 'funcSig',
          type: 'string',
          internalType: 'string',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__BuyingFunctionaltiesClosed',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__FeeAmountToHigh',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InsufficientOutputAmount',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InvalidDepositAmount',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InvalidFeePercentage',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InvalidMinAmountOut',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InvalidRecipient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__InvalidWithdrawAmount',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__BondingCurveBase__TradeAmountTooLow',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__CallerNotAuthorized',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'caller',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__CurveInteractionsMustBeClosed',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidBancorFormula',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidOrchestratorTokenWithdrawAmount',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidReserveRatio',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Bancor_Redeeming_VirtualSupply__InvalidTokenDecimal',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__FM_BC_Restricted_Bancor_Redeeming_VirtualSupply__FeatureDeactivated',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidMetadata',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidOrchestratorAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByOrchestrator',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByPaymentClient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__RedeemingBondingCurveBase__InsufficientCollateralForRedemption',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__RedeemingBondingCurveBase__SellingFunctionaltiesClosed',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualCollateralSupplyBase__AddResultsInOverflow',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualCollateralSupplyBase__SubtractResultsInUnderflow',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualCollateralSupplyBase__VirtualSupplyCannotBeZero',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualIssuanceSupplyBase__AddResultsInOverflow',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualIssuanceSupplyBase__SubtractResultsInUnderflow',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__VirtualIssuanceSupplyBase__VirtualSupplyCannotBeZero',
      inputs: [],
    },
    { type: 'error', name: 'NotInitializing', inputs: [] },
    {
      type: 'error',
      name: 'SafeERC20FailedOperation',
      inputs: [
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],

  counterAbi: [
    {
      inputs: [],
      name: 'counter',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'increment',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],

  paymentRouterAbi: [
    {
      type: 'function',
      name: 'PAYMENT_PUSHER_ROLE',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'bytes32',
          internalType: 'bytes32',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'amountPaid',
      inputs: [
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'collectPaymentOrders',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'tuple[]',
          internalType:
            'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
          components: [
            {
              name: 'recipient',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'paymentToken',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'start',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'cliff',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'end',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          name: '',
          type: 'address[]',
          internalType: 'address[]',
        },
        {
          name: '',
          type: 'uint256[]',
          internalType: 'uint256[]',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'grantModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'grantModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'identifier',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'bytes32',
          internalType: 'bytes32',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'init',
      inputs: [
        {
          name: 'orchestrator_',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
        {
          name: 'metadata',
          type: 'tuple',
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
        {
          name: '',
          type: 'bytes',
          internalType: 'bytes',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'isTrustedForwarder',
      inputs: [
        {
          name: 'forwarder',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'bool',
          internalType: 'bool',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'orchestrator',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'outstandingTokenAmount',
      inputs: [
        {
          name: '_token',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'paymentOrders',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'tuple[]',
          internalType:
            'struct IERC20PaymentClientBase_v1.PaymentOrder[]',
          components: [
            {
              name: 'recipient',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'paymentToken',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'start',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'cliff',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'end',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'pushPayment',
      inputs: [
        {
          name: 'recipient',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'start',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'pushPaymentBatched',
      inputs: [
        {
          name: 'numOfOrders',
          type: 'uint8',
          internalType: 'uint8',
        },
        {
          name: 'recipients',
          type: 'address[]',
          internalType: 'address[]',
        },
        {
          name: 'paymentTokens',
          type: 'address[]',
          internalType: 'address[]',
        },
        {
          name: 'amounts',
          type: 'uint256[]',
          internalType: 'uint256[]',
        },
        {
          name: 'start',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revokeModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revokeModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'supportsInterface',
      inputs: [
        {
          name: 'interfaceId',
          type: 'bytes4',
          internalType: 'bytes4',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'bool',
          internalType: 'bool',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'title',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'string',
          internalType: 'string',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'trustedForwarder',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'address',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'url',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'string',
          internalType: 'string',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'version',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: '',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'event',
      name: 'Initialized',
      inputs: [
        {
          name: 'version',
          type: 'uint64',
          indexed: false,
          internalType: 'uint64',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleInitialized',
      inputs: [
        {
          name: 'parentOrchestrator',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'metadata',
          type: 'tuple',
          indexed: false,
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PaymentOrderAdded',
      inputs: [
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'AddressEmptyCode',
      inputs: [
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'AddressInsufficientBalance',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'FailedInnerCall',
      inputs: [],
    },
    {
      type: 'error',
      name: 'InvalidInitialization',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module_OrchestratorCallbackFailed',
      inputs: [
        {
          name: 'funcSig',
          type: 'string',
          internalType: 'string',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__CallerNotAuthorized',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'caller',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__ArrayLengthMismatch',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__CallerNotAuthorized',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__InsufficientFunds',
      inputs: [
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__InvalidAmount',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__InvalidPaymentOrder',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__InvalidRecipient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__InvalidToken',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__Invalidend',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__ERC20PaymentClientBase__TokenTransferFailed',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidMetadata',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidOrchestratorAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByOrchestrator',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByPaymentClient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'NotInitializing',
      inputs: [],
    },
    {
      type: 'error',
      name: 'SafeERC20FailedOperation',
      inputs: [
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],
  erc20Abi: [
    {
      type: 'function',
      name: 'mint',
      inputs: [
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'allowance',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'approve',
      inputs: [
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'balanceOf',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'decimals',
      inputs: [],
      outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'symbol',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'totalSupply',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'transfer',
      inputs: [
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'transferFrom',
      inputs: [
        {
          name: 'from',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'Approval',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'spender',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Transfer',
      inputs: [
        {
          name: 'from',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'to',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'value',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'ERC20InsufficientAllowance',
      inputs: [
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'allowance',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'needed',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InsufficientBalance',
      inputs: [
        {
          name: 'sender',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'balance',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'needed',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InvalidApprover',
      inputs: [
        {
          name: 'approver',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InvalidReceiver',
      inputs: [
        {
          name: 'receiver',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InvalidSender',
      inputs: [
        {
          name: 'sender',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'ERC20InvalidSpender',
      inputs: [
        {
          name: 'spender',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],

  orchestratorAbi: [
    {
      type: 'constructor',
      inputs: [
        {
          name: '_trustedForwarder',
          type: 'address',
          internalType: 'address',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'MODULE_UPDATE_TIMELOCK',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'authorizer',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IAuthorizer_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'cancelAuthorizerUpdate',
      inputs: [
        {
          name: 'authorizer_',
          type: 'address',
          internalType: 'contract IAuthorizer_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'cancelFundingManagerUpdate',
      inputs: [
        {
          name: 'fundingManager_',
          type: 'address',
          internalType: 'contract IFundingManager_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'cancelModuleUpdate',
      inputs: [
        {
          name: 'module_',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'cancelPaymentProcessorUpdate',
      inputs: [
        {
          name: 'paymentProcessor_',
          type: 'address',
          internalType: 'contract IPaymentProcessor_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'executeAddModule',
      inputs: [
        {
          name: 'module_',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'executeRemoveModule',
      inputs: [
        {
          name: 'module_',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'executeSetAuthorizer',
      inputs: [
        {
          name: 'newAuthorizer',
          type: 'address',
          internalType: 'contract IAuthorizer_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'executeSetFundingManager',
      inputs: [
        {
          name: 'newFundingManager',
          type: 'address',
          internalType: 'contract IFundingManager_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'executeSetPaymentProcessor',
      inputs: [
        {
          name: 'newPaymentProcessor',
          type: 'address',
          internalType: 'contract IPaymentProcessor_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'fundingManager',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IFundingManager_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'governor',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IGovernor_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'init',
      inputs: [
        {
          name: 'orchestratorId_',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'moduleFactory_',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'modules',
          type: 'address[]',
          internalType: 'address[]',
        },
        {
          name: 'fundingManager_',
          type: 'address',
          internalType: 'contract IFundingManager_v1',
        },
        {
          name: 'authorizer_',
          type: 'address',
          internalType: 'contract IAuthorizer_v1',
        },
        {
          name: 'paymentProcessor_',
          type: 'address',
          internalType: 'contract IPaymentProcessor_v1',
        },
        {
          name: 'governor_',
          type: 'address',
          internalType: 'contract IGovernor_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initiateAddModuleWithTimelock',
      inputs: [
        {
          name: 'module_',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initiateRemoveModuleWithTimelock',
      inputs: [
        {
          name: 'module_',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initiateSetAuthorizerWithTimelock',
      inputs: [
        {
          name: 'newAuthorizer',
          type: 'address',
          internalType: 'contract IAuthorizer_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initiateSetFundingManagerWithTimelock',
      inputs: [
        {
          name: 'newFundingManager',
          type: 'address',
          internalType: 'contract IFundingManager_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'initiateSetPaymentProcessorWithTimelock',
      inputs: [
        {
          name: 'newPaymentProcessor',
          type: 'address',
          internalType: 'contract IPaymentProcessor_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'isModule',
      inputs: [
        {
          name: 'module',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'isTrustedForwarder',
      inputs: [
        {
          name: 'forwarder',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'listModules',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'moduleAddressToTimelock',
      inputs: [
        {
          name: 'module',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: 'timelockActive',
          type: 'bool',
          internalType: 'bool',
        },
        {
          name: 'timelockUntil',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'moduleFactory',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'modulesSize',
      inputs: [],
      outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'orchestratorId',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'paymentProcessor',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IPaymentProcessor_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'supportsInterface',
      inputs: [
        {
          name: 'interfaceId',
          type: 'bytes4',
          internalType: 'bytes4',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'trustedForwarder',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'event',
      name: 'AuthorizerUpdated',
      inputs: [
        {
          name: '_address',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'FundingManagerUpdated',
      inputs: [
        {
          name: '_address',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'Initialized',
      inputs: [
        {
          name: 'version',
          type: 'uint64',
          indexed: false,
          internalType: 'uint64',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleAdded',
      inputs: [
        {
          name: 'module',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleRemoved',
      inputs: [
        {
          name: 'module',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleTimelockStarted',
      inputs: [
        {
          name: 'module',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'timelockUntil',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleUpdateCanceled',
      inputs: [
        {
          name: 'module',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OrchestratorInitialized',
      inputs: [
        {
          name: 'orchestratorId_',
          type: 'uint256',
          indexed: true,
          internalType: 'uint256',
        },
        {
          name: 'fundingManager',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'authorizer',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'paymentProcessor',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'modules',
          type: 'address[]',
          indexed: false,
          internalType: 'address[]',
        },
        {
          name: 'governor',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PaymentProcessorUpdated',
      inputs: [
        {
          name: '_address',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'InvalidInitialization',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__CallerNotAuthorized',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__InvalidModuleAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__IsModule',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__IsNotModule',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__ModuleAmountOverLimits',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__ModuleFactoryInvalid',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__ModuleNotRegistered',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__ModuleUpdateAlreadyStarted',
      inputs: [],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__ModuleUpdateTimelockStillActive',
      inputs: [
        {
          name: '_module',
          type: 'address',
          internalType: 'address',
        },
        {
          name: '_timelockUntil',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'ModuleManagerBase__OnlyCallableByModule',
      inputs: [],
    },
    { type: 'error', name: 'NotInitializing', inputs: [] },
    {
      type: 'error',
      name: 'Orchestrator__CallerNotAuthorized',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'caller',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Orchestrator__DependencyInjection__ModuleNotUsedInOrchestrator',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Orchestrator__InvalidModuleType',
      inputs: [
        {
          name: 'module',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Orchestrator__InvalidRemovalOfAuthorizer',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Orchestrator__InvalidRemovalOfFundingManager',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Orchestrator__InvalidRemovalOfPaymentProcessor',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Orchestrator__MismatchedTokenForFundingManager',
      inputs: [
        {
          name: 'currentToken',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'newToken',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],
  streamingProcessorAbi: [
    {
      type: 'function',
      name: 'cancelRunningPayments',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'contract IERC20PaymentClientBase_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'claimAll',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'claimForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'claimPreviouslyUnclaimable',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'receiver',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'cliffForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'endForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'grantModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'grantModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'identifier',
      inputs: [],
      outputs: [
        { name: '', type: 'bytes32', internalType: 'bytes32' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'init',
      inputs: [
        {
          name: 'orchestrator_',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
        {
          name: 'metadata',
          type: 'tuple',
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
        { name: '', type: 'bytes', internalType: 'bytes' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'isActivePaymentReceiver',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'isTrustedForwarder',
      inputs: [
        {
          name: 'forwarder',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'numStreams',
      inputs: [
        { name: '', type: 'address', internalType: 'address' },
        { name: '', type: 'address', internalType: 'address' },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'orchestrator',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'processPayments',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'contract IERC20PaymentClientBase_v1',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'releasableForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'releasedForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'removeAllPaymentReceiverPayments',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'removePaymentForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revokeModuleRole',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'revokeModuleRoleBatched',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'targets',
          type: 'address[]',
          internalType: 'address[]',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'startForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'streamedAmountForSpecificStream',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
        {
          name: 'timestamp',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'supportsInterface',
      inputs: [
        {
          name: 'interfaceId',
          type: 'bytes4',
          internalType: 'bytes4',
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'title',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'trustedForwarder',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'unclaimable',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: 'amount',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'url',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'validPaymentOrder',
      inputs: [
        {
          name: 'order',
          type: 'tuple',
          internalType:
            'struct IERC20PaymentClientBase_v1.PaymentOrder',
          components: [
            {
              name: 'recipient',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'paymentToken',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'start',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'cliff',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'end',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
      ],
      outputs: [{ name: '', type: 'bool', internalType: 'bool' }],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'version',
      inputs: [],
      outputs: [
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
        { name: '', type: 'uint256', internalType: 'uint256' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'viewAllPaymentOrders',
      inputs: [
        {
          name: 'client',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'tuple[]',
          internalType: 'struct IPP_Streaming_v1.Stream[]',
          components: [
            {
              name: '_paymentToken',
              type: 'address',
              internalType: 'address',
            },
            {
              name: '_streamId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_total',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_released',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_start',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_cliff',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_end',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'event',
      name: 'Initialized',
      inputs: [
        {
          name: 'version',
          type: 'uint64',
          indexed: false,
          internalType: 'uint64',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'InvalidStreamingOrderDiscarded',
      inputs: [
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'start',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'ModuleInitialized',
      inputs: [
        {
          name: 'parentOrchestrator',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'metadata',
          type: 'tuple',
          indexed: false,
          internalType: 'struct IModule_v1.Metadata',
          components: [
            {
              name: 'majorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'minorVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'patchVersion',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'url',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'title',
              type: 'string',
              internalType: 'string',
            },
          ],
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PaymentOrderProcessed',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'start',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PaymentOrderProcessed',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'start',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'PaymentReceiverRemoved',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'StreamingPaymentAdded',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'start',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'cliff',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'end',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'StreamingPaymentRemoved',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'TokensReleased',
      inputs: [
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UnclaimableAmountAdded',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'token',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'UnclaimableAmountAdded',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'recipient',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'paymentToken',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
        {
          name: 'amount',
          type: 'uint256',
          indexed: false,
          internalType: 'uint256',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'AddressEmptyCode',
      inputs: [
        {
          name: 'target',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'AddressInsufficientBalance',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    { type: 'error', name: 'FailedInnerCall', inputs: [] },
    {
      type: 'error',
      name: 'InvalidInitialization',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module_OrchestratorCallbackFailed',
      inputs: [
        {
          name: 'funcSig',
          type: 'string',
          internalType: 'string',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__CallerNotAuthorized',
      inputs: [
        {
          name: 'role',
          type: 'bytes32',
          internalType: 'bytes32',
        },
        {
          name: 'caller',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__InvalidAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidMetadata',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__InvalidOrchestratorAddress',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByOrchestrator',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__OnlyCallableByPaymentClient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__PP_Streaming__In_validPaymentReceiver',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__PP_Streaming__InactiveStream',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__PP_Streaming__InsufficientTokenBalanceInClient',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__PP_Streaming__InvalidStream',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'streamId',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__PaymentProcessor__CannotCallOnOtherClientsOrders',
      inputs: [],
    },
    {
      type: 'error',
      name: 'Module__PaymentProcessor__NothingToClaim',
      inputs: [
        {
          name: 'paymentClient',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'paymentReceiver',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'Module__PaymentProcessor__OnlyCallableByModule',
      inputs: [],
    },
    { type: 'error', name: 'NotInitializing', inputs: [] },
    {
      type: 'error',
      name: 'SafeERC20FailedOperation',
      inputs: [
        {
          name: 'token',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],
};
