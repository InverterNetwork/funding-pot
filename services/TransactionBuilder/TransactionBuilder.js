import { encodeSingle, TransactionType } from 'ethers-multisend';
import abis from '../../data/abis.js';
import { BATCH_SIZE } from '../../config.js';
import {
  encodeAbiParameters,
  keccak256,
  toHex,
  encodeFunctionData,
  concat,
  pad,
  getFunctionSelector,
} from 'viem';

const PAYMENT_PUSHER_ROLE =
  '0x5041594d454e545f505553484552000000000000000000000000000000000000';

export class TransactionBuilder {
  transactions;
  safe;
  paymentRouter;
  issuanceToken;
  collateralToken;
  bondingCurve;
  start;
  cliff;
  end;

  constructor({ projectConfig, workflowAddresses, batchConfig }) {
    this.transactions = [];
    this.safe = projectConfig.SAFE;
    this.paymentRouter = workflowAddresses.paymentRouter;
    this.issuanceToken = workflowAddresses.issuanceToken;
    this.collateralToken = workflowAddresses.collateralToken;
    this.bondingCurve = workflowAddresses.bondingCurve;
    if (batchConfig) {
      this.start = batchConfig.VESTING_DETAILS.START;
      this.cliff = batchConfig.VESTING_DETAILS.CLIFF;
      this.end = batchConfig.VESTING_DETAILS.END;
    }
  }

  buy(depositAmount) {
    this.addTx(
      this.bondingCurve,
      'bondingCurveAbi',
      'buy(uint256,uint256)',
      [depositAmount, 1n]
    );
  }

  transferTokens(token, to, amount) {
    this.addTx(token, 'erc20Abi', 'transfer(address,uint256)', [
      to,
      amount,
    ]);
  }

  approve(token, spender, amount) {
    this.addTx(token, 'erc20Abi', 'approve(address,uint256)', [
      spender,
      amount,
    ]);
  }

  createVestings(vestingSpecs) {
    for (const vestingSpec of vestingSpecs) {
      const { recipient, amount } = vestingSpec;
      this.addTx(
        this.paymentRouter,
        'paymentRouterAbi',
        'pushPayment(address,address,uint256,uint256,uint256,uint256)',
        [
          recipient,
          this.issuanceToken,
          amount,
          this.start,
          this.cliff,
          this.end,
        ]
      );
    }
  }

  assignVestingAdmin(newRoleOwner) {
    this.addTx(
      this.paymentRouter,
      'paymentRouterAbi',
      'grantModuleRole(bytes32,address)',
      [PAYMENT_PUSHER_ROLE, newRoleOwner]
    );
  }

  deployZodiacRoles(factory, masterCopy) {
    const salt = Math.floor(
      Math.random() * 1_000_000_000_000_000 + 1
    ).toString();
    const encodedParams = encodeAbiParameters(
      [
        { name: '_owner', type: 'address' },
        { name: '_avatar', type: 'address' },
        { name: '_target', type: 'address' },
      ],
      [this.safe, this.safe, this.safe]
    );

    const initializer = encodeFunctionData({
      functionName: 'setUp',
      abi: abis.rolesAbi,
      args: [encodedParams],
    });

    this.addTx(
      factory,
      'moduleFactoryAbi',
      'deployModule(address,bytes,uint256)',
      [masterCopy, initializer, salt]
    );

    return this.calculateProxyAddress(
      factory,
      masterCopy,
      initializer,
      BigInt(salt)
    );
  }

  enableModule(source, moduleAddress) {
    this.addTx(source, 'safeAbi', 'enableModule(address)', [
      moduleAddress,
    ]);
  }

  createRole(roleKey, rolesModule, feeRecipient) {
    // Scope target (address)
    this.addTx(
      rolesModule,
      'rolesAbi',
      'scopeTarget(bytes32,address)',
      [roleKey, this.bondingCurve]
    );

    // Scope function
    this.addTx(
      rolesModule,
      'rolesAbi',
      'scopeFunction(bytes32,address,bytes4,(uint8,uint8,uint8,bytes)[],uint8)',
      [
        roleKey,
        this.bondingCurve,
        keccak256(
          new TextEncoder().encode(
            'withdrawProjectCollateralFee(address,uint256)'
          )
        ).slice(0, 10),
        [
          {
            parent: 0,
            paramType: 5, // ParameterType.Calldata
            operator: 5, // Operator.Matches
            compValue: '0x',
          },
          {
            parent: 0, // child of the root node
            paramType: 1, // ParameterType.Static
            operator: 16, // Operator.EqualTo
            compValue: pad(feeRecipient, { size: 32 }),
          },
        ],
        0,
      ]
    );
  }

  assignRole(roleKey, rolesModule, feeClaimer) {
    this.enableModule(rolesModule, feeClaimer);

    this.addTx(
      rolesModule,
      'rolesAbi',
      'assignRoles(address,bytes32[],bool[])',
      [feeClaimer, [roleKey], [true]]
    );

    this.addTx(
      rolesModule,
      'rolesAbi',
      'setDefaultRole(address,bytes32)',
      [feeClaimer, roleKey]
    );
  }

  addTx(to, abiName, functionSignature, inputValues) {
    this.transactions.push({
      to,
      abiName,
      functionSignature,
      inputValues,
    });
  }

  // GETTERS

  getEncodedTxs() {
    const encodedTxs = [];
    for (const tx of this.transactions) {
      const { to, abiName, functionSignature, inputValues } = tx;
      const abi = abis[abiName];
      const encoded = encodeSingle({
        type: TransactionType.callContract,
        id: '0',
        to,
        value: '0',
        abi,
        functionSignature,
        inputValues,
      });

      // encodeSingle returns a value of '0x00' for value
      // but the Safe API only accepts '0' => overwrite
      encodedTxs.push({ ...encoded, value: '0' });
    }
    return encodedTxs;
  }

  getEncodedTxBatches() {
    return this.getTxBatches(this.getEncodedTxs());
  }

  // removes abi field from transactions
  getReadableTxBatches() {
    return this.getTxBatches(
      this.transactions.map((tx) => {
        const { to, functionSignature, inputValues } = tx;
        return {
          to,
          functionSignature,
          inputValues,
        };
      })
    );
  }

  getTxBatches(txs) {
    const txBatch = [];
    for (let i = 0; i < txs.length; i += BATCH_SIZE) {
      const chunk = txs.slice(i, i + BATCH_SIZE);
      txBatch.push(chunk);
    }
    return txBatch;
  }

  // HELPERS

  calculateProxyAddress(
    factoryAddress,
    masterCopy,
    initializer,
    saltNonce
  ) {
    // 1. Calculate the salt the same way the contract does
    const initializerHash = keccak256(initializer);
    const salt = keccak256(
      concat([
        initializerHash,
        pad(toHex(saltNonce), { size: 32 }), // Convert saltNonce to hex first
      ])
    );

    // 2. Create the deployment bytecode the same way the contract does
    const deploymentBytecode = concat([
      '0x602d8060093d393df3363d3d373d3d3d363d73',
      masterCopy.slice(2).padStart(40, '0'), // Remove '0x' and pad to 20 bytes
      '0x5af43d82803e903d91602b57fd5bf3',
    ]);

    // 3. Calculate CREATE2 address
    const create2Input = concat([
      '0xff',
      factoryAddress.slice(2).padStart(40, '0'), // Remove '0x' and pad to 20 bytes
      salt,
      keccak256(deploymentBytecode),
    ]);

    const deploymentAddress = `0x${keccak256(create2Input).slice(
      -40
    )}`;
    return deploymentAddress;
  }
}
