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
  mintWrapperAbi: [
    {
      type: 'constructor',
      inputs: [
        {
          name: '_issuanceToken',
          type: 'address',
          internalType: 'contract IERC20Issuance_v1',
        },
        {
          name: '_owner',
          type: 'address',
          internalType: 'address',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'allowedMinters',
      inputs: [
        {
          name: 'minter',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        { name: 'allowed', type: 'bool', internalType: 'bool' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'burn',
      inputs: [
        {
          name: '_from',
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
      type: 'function',
      name: 'decimals',
      inputs: [],
      outputs: [{ name: '', type: 'uint8', internalType: 'uint8' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'issuanceToken',
      inputs: [],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IERC20Issuance_v1',
        },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'mint',
      inputs: [
        {
          name: '_to',
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
      type: 'function',
      name: 'name',
      inputs: [],
      outputs: [{ name: '', type: 'string', internalType: 'string' }],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'owner',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
      stateMutability: 'view',
    },
    {
      type: 'function',
      name: 'renounceOwnership',
      inputs: [],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'setMinter',
      inputs: [
        {
          name: '_minter',
          type: 'address',
          internalType: 'address',
        },
        { name: '_allowed', type: 'bool', internalType: 'bool' },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
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
      name: 'transferOwnership',
      inputs: [
        {
          name: 'newOwner',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [],
      stateMutability: 'nonpayable',
    },
    {
      type: 'event',
      name: 'MinterSet',
      inputs: [
        {
          name: 'minter',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'allowed',
          type: 'bool',
          indexed: false,
          internalType: 'bool',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'MinterSet',
      inputs: [
        {
          name: 'minter',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'allowed',
          type: 'bool',
          indexed: false,
          internalType: 'bool',
        },
      ],
      anonymous: false,
    },
    {
      type: 'event',
      name: 'OwnershipTransferred',
      inputs: [
        {
          name: 'previousOwner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'newOwner',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
      ],
      anonymous: false,
    },
    {
      type: 'error',
      name: 'IERC20Issuance__CallerIsNotMinter',
      inputs: [],
    },
    {
      type: 'error',
      name: 'IERC20Issuance__CallerIsNotMinter',
      inputs: [],
    },
    {
      type: 'error',
      name: 'OwnableInvalidOwner',
      inputs: [
        {
          name: 'owner',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
    {
      type: 'error',
      name: 'OwnableUnauthorizedAccount',
      inputs: [
        {
          name: 'account',
          type: 'address',
          internalType: 'address',
        },
      ],
    },
  ],
  restrictedPimFactoryAbi: [
    {
      type: 'constructor',
      inputs: [
        {
          name: '_orchestratorFactory',
          type: 'address',
          internalType: 'address',
        },
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
      name: 'addFunding',
      inputs: [
        {
          name: 'deployer',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'admin',
          type: 'address',
          internalType: 'address',
        },
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
      name: 'createPIMWorkflow',
      inputs: [
        {
          name: 'workflowConfig',
          type: 'tuple',
          internalType:
            'struct IOrchestratorFactory_v1.WorkflowConfig',
          components: [
            {
              name: 'independentUpdates',
              type: 'bool',
              internalType: 'bool',
            },
            {
              name: 'independentUpdateAdmin',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          name: 'fundingManagerConfig',
          type: 'tuple',
          internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
          components: [
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
        },
        {
          name: 'authorizerConfig',
          type: 'tuple',
          internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
          components: [
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
        },
        {
          name: 'paymentProcessorConfig',
          type: 'tuple',
          internalType: 'struct IOrchestratorFactory_v1.ModuleConfig',
          components: [
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
        },
        {
          name: 'moduleConfigs',
          type: 'tuple[]',
          internalType:
            'struct IOrchestratorFactory_v1.ModuleConfig[]',
          components: [
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
        },
        {
          name: 'issuanceTokenParams',
          type: 'tuple',
          internalType: 'struct IBondingCurveBase_v1.IssuanceToken',
          components: [
            {
              name: 'name',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'symbol',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'decimals',
              type: 'uint8',
              internalType: 'uint8',
            },
            {
              name: 'maxSupply',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          name: 'beneficiary',
          type: 'address',
          internalType: 'address',
        },
      ],
      outputs: [
        {
          name: '',
          type: 'address',
          internalType: 'contract IOrchestrator_v1',
        },
      ],
      stateMutability: 'nonpayable',
    },
    {
      type: 'function',
      name: 'fundings',
      inputs: [
        {
          name: 'deployer',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'admin',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'token',
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
        {
          name: 'sponsor',
          type: 'address',
          internalType: 'address',
        },
      ],
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
      name: 'orchestratorFactory',
      inputs: [],
      outputs: [
        { name: '', type: 'address', internalType: 'address' },
      ],
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
      name: 'withdrawFunding',
      inputs: [
        {
          name: 'deployer',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          internalType: 'address',
        },
        {
          name: 'admin',
          type: 'address',
          internalType: 'address',
        },
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
      type: 'event',
      name: 'FundingAdded',
      inputs: [
        {
          name: 'sponsor',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'deployer',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'admin',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'token',
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
      name: 'FundingRemoved',
      inputs: [
        {
          name: 'sponsor',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'deployer',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'admin',
          type: 'address',
          indexed: false,
          internalType: 'address',
        },
        {
          name: 'token',
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
      name: 'PIMWorkflowCreated',
      inputs: [
        {
          name: 'orchestrator',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'issuanceToken',
          type: 'address',
          indexed: true,
          internalType: 'address',
        },
        {
          name: 'beneficiary',
          type: 'address',
          indexed: true,
          internalType: 'address',
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
      name: 'FundingAlreadyAddedByDifferentSponsor',
      inputs: [],
    },
    {
      type: 'error',
      name: 'InsufficientFunding',
      inputs: [
        {
          name: 'availableFunding',
          type: 'uint256',
          internalType: 'uint256',
        },
      ],
    },
    { type: 'error', name: 'NotAuthorized', inputs: [] },
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
  nftAbi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: 'balance',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  singletonFactoryAbi: [
    {
      inputs: [
        { internalType: 'bytes', name: '_initCode', type: 'bytes' },
        { internalType: 'bytes32', name: '_salt', type: 'bytes32' },
      ],
      name: 'deploy',
      outputs: [
        {
          internalType: 'address payable',
          name: 'createdContract',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  safeAbi: [
    {
      inputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'AddedOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'approvedHash',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'ApproveHash',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'masterCopy',
          type: 'address',
        },
      ],
      name: 'ChangedMasterCopy',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint256',
          name: 'threshold',
          type: 'uint256',
        },
      ],
      name: 'ChangedThreshold',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract Module',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'DisabledModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'contract Module',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'EnabledModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payment',
          type: 'uint256',
        },
      ],
      name: 'ExecutionFailure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'ExecutionFromModuleFailure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'ExecutionFromModuleSuccess',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'txHash',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'payment',
          type: 'uint256',
        },
      ],
      name: 'ExecutionSuccess',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'RemovedOwner',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'msgHash',
          type: 'bytes32',
        },
      ],
      name: 'SignMsg',
      type: 'event',
    },
    {
      payable: true,
      stateMutability: 'payable',
      type: 'fallback',
    },
    {
      constant: true,
      inputs: [],
      name: 'NAME',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'VERSION',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_threshold',
          type: 'uint256',
        },
      ],
      name: 'addOwnerWithThreshold',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'bytes32',
          name: 'hashToApprove',
          type: 'bytes32',
        },
      ],
      name: 'approveHash',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'approvedHashes',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: '_masterCopy',
          type: 'address',
        },
      ],
      name: 'changeMasterCopy',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'uint256',
          name: '_threshold',
          type: 'uint256',
        },
      ],
      name: 'changeThreshold',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Module',
          name: 'prevModule',
          type: 'address',
        },
        {
          internalType: 'contract Module',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'disableModule',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'domainSeparator',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'contract Module',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'enableModule',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'safeTxGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'baseGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gasPrice',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'gasToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'refundReceiver',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_nonce',
          type: 'uint256',
        },
      ],
      name: 'encodeTransactionData',
      outputs: [{ internalType: 'bytes', name: '', type: 'bytes' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'safeTxGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'baseGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gasPrice',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'gasToken',
          type: 'address',
        },
        {
          internalType: 'address payable',
          name: 'refundReceiver',
          type: 'address',
        },
        {
          internalType: 'bytes',
          name: 'signatures',
          type: 'bytes',
        },
      ],
      name: 'execTransaction',
      outputs: [
        { internalType: 'bool', name: 'success', type: 'bool' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
      ],
      name: 'execTransactionFromModule',
      outputs: [
        { internalType: 'bool', name: 'success', type: 'bool' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
      ],
      name: 'execTransactionFromModuleReturnData',
      outputs: [
        { internalType: 'bool', name: 'success', type: 'bool' },
        {
          internalType: 'bytes',
          name: 'returnData',
          type: 'bytes',
        },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes', name: 'message', type: 'bytes' },
      ],
      name: 'getMessageHash',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getModules',
      outputs: [
        { internalType: 'address[]', name: '', type: 'address[]' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'start',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'pageSize',
          type: 'uint256',
        },
      ],
      name: 'getModulesPaginated',
      outputs: [
        {
          internalType: 'address[]',
          name: 'array',
          type: 'address[]',
        },
        { internalType: 'address', name: 'next', type: 'address' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getOwners',
      outputs: [
        { internalType: 'address[]', name: '', type: 'address[]' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'getThreshold',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
        {
          internalType: 'uint256',
          name: 'safeTxGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'baseGas',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'gasPrice',
          type: 'uint256',
        },
        {
          internalType: 'address',
          name: 'gasToken',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'refundReceiver',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_nonce',
          type: 'uint256',
        },
      ],
      name: 'getTransactionHash',
      outputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'isOwner',
      outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'bytes', name: '_data', type: 'bytes' },
        {
          internalType: 'bytes',
          name: '_signature',
          type: 'bytes',
        },
      ],
      name: 'isValidSignature',
      outputs: [{ internalType: 'bytes4', name: '', type: 'bytes4' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'nonce',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'prevOwner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: '_threshold',
          type: 'uint256',
        },
      ],
      name: 'removeOwner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'to', type: 'address' },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
      ],
      name: 'requiredTxGas',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'handler',
          type: 'address',
        },
      ],
      name: 'setFallbackHandler',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address[]',
          name: '_owners',
          type: 'address[]',
        },
        {
          internalType: 'uint256',
          name: '_threshold',
          type: 'uint256',
        },
        { internalType: 'address', name: 'to', type: 'address' },
        { internalType: 'bytes', name: 'data', type: 'bytes' },
        {
          internalType: 'address',
          name: 'fallbackHandler',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'paymentToken',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'payment',
          type: 'uint256',
        },
        {
          internalType: 'address payable',
          name: 'paymentReceiver',
          type: 'address',
        },
      ],
      name: 'setup',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'bytes', name: '_data', type: 'bytes' },
      ],
      name: 'signMessage',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'bytes32', name: '', type: 'bytes32' },
      ],
      name: 'signedMessages',
      outputs: [
        { internalType: 'uint256', name: '', type: 'uint256' },
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        {
          internalType: 'address',
          name: 'prevOwner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'oldOwner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'swapOwner',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  rolesAbi: [
    {
      inputs: [
        {
          internalType: 'address',
          name: '_owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_avatar',
          type: 'address',
        },
        {
          internalType: 'address',
          name: '_target',
          type: 'address',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'AlreadyDisabledModule',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'AlreadyEnabledModule',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ArraysDifferentLength',
      type: 'error',
    },
    {
      inputs: [],
      name: 'CalldataOutOfBounds',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'enum PermissionChecker.Status',
          name: 'status',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'info',
          type: 'bytes32',
        },
      ],
      name: 'ConditionViolation',
      type: 'error',
    },
    {
      inputs: [],
      name: 'FunctionSignatureTooShort',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'HashAlreadyConsumed',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'InvalidModule',
      type: 'error',
    },
    {
      inputs: [],
      name: 'InvalidPageSize',
      type: 'error',
    },
    {
      inputs: [],
      name: 'MalformedMultiEntrypoint',
      type: 'error',
    },
    {
      inputs: [],
      name: 'ModuleTransactionFailed',
      type: 'error',
    },
    {
      inputs: [],
      name: 'NoMembership',
      type: 'error',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'NotAuthorized',
      type: 'error',
    },
    {
      inputs: [],
      name: 'SetupModulesAlreadyCalled',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          indexed: false,
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'AllowFunction',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'AllowTarget',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32[]',
          name: 'roleKeys',
          type: 'bytes32[]',
        },
        {
          indexed: false,
          internalType: 'bool[]',
          name: 'memberOf',
          type: 'bool[]',
        },
      ],
      name: 'AssignRoles',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousAvatar',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newAvatar',
          type: 'address',
        },
      ],
      name: 'AvatarSet',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'allowanceKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'consumed',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'newBalance',
          type: 'uint128',
        },
      ],
      name: 'ConsumeAllowance',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'DisabledModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'EnabledModule',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'ExecutionFromModuleFailure',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'ExecutionFromModuleSuccess',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'HashExecuted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'HashInvalidated',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'uint8',
          name: 'version',
          type: 'uint8',
        },
      ],
      name: 'Initialized',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousOwner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'OwnershipTransferred',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
      ],
      name: 'RevokeFunction',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
      ],
      name: 'RevokeTarget',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'initiator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'avatar',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'target',
          type: 'address',
        },
      ],
      name: 'RolesModSetup',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          components: [
            {
              internalType: 'uint8',
              name: 'parent',
              type: 'uint8',
            },
            {
              internalType: 'enum ParameterType',
              name: 'paramType',
              type: 'uint8',
            },
            {
              internalType: 'enum Operator',
              name: 'operator',
              type: 'uint8',
            },
            {
              internalType: 'bytes',
              name: 'compValue',
              type: 'bytes',
            },
          ],
          indexed: false,
          internalType: 'struct ConditionFlat[]',
          name: 'conditions',
          type: 'tuple[]',
        },
        {
          indexed: false,
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'ScopeFunction',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
      ],
      name: 'ScopeTarget',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'allowanceKey',
          type: 'bytes32',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'balance',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'maxRefill',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint128',
          name: 'refill',
          type: 'uint128',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'period',
          type: 'uint64',
        },
        {
          indexed: false,
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
      ],
      name: 'SetAllowance',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes32',
          name: 'defaultRoleKey',
          type: 'bytes32',
        },
      ],
      name: 'SetDefaultRole',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          indexed: false,
          internalType: 'contract ITransactionUnwrapper',
          name: 'adapter',
          type: 'address',
        },
      ],
      name: 'SetUnwrapAdapter',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'previousTarget',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'newTarget',
          type: 'address',
        },
      ],
      name: 'TargetSet',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'allowFunction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'allowTarget',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'allowances',
      outputs: [
        {
          internalType: 'uint128',
          name: 'refill',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'maxRefill',
          type: 'uint128',
        },
        {
          internalType: 'uint64',
          name: 'period',
          type: 'uint64',
        },
        {
          internalType: 'uint128',
          name: 'balance',
          type: 'uint128',
        },
        {
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
        {
          internalType: 'bytes32[]',
          name: 'roleKeys',
          type: 'bytes32[]',
        },
        {
          internalType: 'bool[]',
          name: 'memberOf',
          type: 'bool[]',
        },
      ],
      name: 'assignRoles',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'avatar',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'consumed',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'defaultRoles',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'prevModule',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'disableModule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
      ],
      name: 'enableModule',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
      ],
      name: 'execTransactionFromModule',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
      ],
      name: 'execTransactionFromModuleReturnData',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
        {
          internalType: 'bytes',
          name: 'returnData',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'bool',
          name: 'shouldRevert',
          type: 'bool',
        },
      ],
      name: 'execTransactionWithRole',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'enum Enum.Operation',
          name: 'operation',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'bool',
          name: 'shouldRevert',
          type: 'bool',
        },
      ],
      name: 'execTransactionWithRoleReturnData',
      outputs: [
        {
          internalType: 'bool',
          name: 'success',
          type: 'bool',
        },
        {
          internalType: 'bytes',
          name: 'returnData',
          type: 'bytes',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'start',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'pageSize',
          type: 'uint256',
        },
      ],
      name: 'getModulesPaginated',
      outputs: [
        {
          internalType: 'address[]',
          name: 'array',
          type: 'address[]',
        },
        {
          internalType: 'address',
          name: 'next',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'hash',
          type: 'bytes32',
        },
      ],
      name: 'invalidate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_module',
          type: 'address',
        },
      ],
      name: 'isModuleEnabled',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'data',
          type: 'bytes',
        },
        {
          internalType: 'bytes32',
          name: 'salt',
          type: 'bytes32',
        },
      ],
      name: 'moduleTxHash',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'owner',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
      ],
      name: 'revokeFunction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
      ],
      name: 'revokeTarget',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
        {
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          components: [
            {
              internalType: 'uint8',
              name: 'parent',
              type: 'uint8',
            },
            {
              internalType: 'enum ParameterType',
              name: 'paramType',
              type: 'uint8',
            },
            {
              internalType: 'enum Operator',
              name: 'operator',
              type: 'uint8',
            },
            {
              internalType: 'bytes',
              name: 'compValue',
              type: 'bytes',
            },
          ],
          internalType: 'struct ConditionFlat[]',
          name: 'conditions',
          type: 'tuple[]',
        },
        {
          internalType: 'enum ExecutionOptions',
          name: 'options',
          type: 'uint8',
        },
      ],
      name: 'scopeFunction',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'targetAddress',
          type: 'address',
        },
      ],
      name: 'scopeTarget',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'key',
          type: 'bytes32',
        },
        {
          internalType: 'uint128',
          name: 'balance',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'maxRefill',
          type: 'uint128',
        },
        {
          internalType: 'uint128',
          name: 'refill',
          type: 'uint128',
        },
        {
          internalType: 'uint64',
          name: 'period',
          type: 'uint64',
        },
        {
          internalType: 'uint64',
          name: 'timestamp',
          type: 'uint64',
        },
      ],
      name: 'setAllowance',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_avatar',
          type: 'address',
        },
      ],
      name: 'setAvatar',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'module',
          type: 'address',
        },
        {
          internalType: 'bytes32',
          name: 'roleKey',
          type: 'bytes32',
        },
      ],
      name: 'setDefaultRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '_target',
          type: 'address',
        },
      ],
      name: 'setTarget',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'bytes4',
          name: 'selector',
          type: 'bytes4',
        },
        {
          internalType: 'contract ITransactionUnwrapper',
          name: 'adapter',
          type: 'address',
        },
      ],
      name: 'setTransactionUnwrapper',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes',
          name: 'initParams',
          type: 'bytes',
        },
      ],
      name: 'setUp',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'target',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'newOwner',
          type: 'address',
        },
      ],
      name: 'transferOwnership',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      name: 'unwrappers',
      outputs: [
        {
          internalType: 'contract ITransactionUnwrapper',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  moduleFactoryAbi: [
    { inputs: [], name: 'FailedInitialization', type: 'error' },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'address_',
          type: 'address',
        },
      ],
      name: 'TakenAddress',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
      ],
      name: 'TargetHasNoCode',
      type: 'error',
    },
    {
      inputs: [
        { internalType: 'address', name: 'target', type: 'address' },
      ],
      name: 'ZeroAddress',
      type: 'error',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'proxy',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'masterCopy',
          type: 'address',
        },
      ],
      name: 'ModuleProxyCreation',
      type: 'event',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'masterCopy',
          type: 'address',
        },
        { internalType: 'bytes', name: 'initializer', type: 'bytes' },
        {
          internalType: 'uint256',
          name: 'saltNonce',
          type: 'uint256',
        },
      ],
      name: 'deployModule',
      outputs: [
        { internalType: 'address', name: 'proxy', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
};
