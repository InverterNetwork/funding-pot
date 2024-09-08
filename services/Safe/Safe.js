import 'dotenv/config';
import SafeApiKit from '@safe-global/api-kit';
import { ethers } from 'ethers';
import ProtocolKit from '@safe-global/protocol-kit';

export class Safe {
  safeAddress;
  apiKit;
  protocolKit;
  safeTransactions;

  constructor(chainId, safeAddress, rpcUrl) {
    this.apiKit = new SafeApiKit.default({
      chainId,
    });
    this.rpcUrl = rpcUrl;
    this.safeAddress = safeAddress;
    this.safeTransactions = [];
  }

  async addDelegate(delegateAddress) {
    const wallet = new ethers.Wallet('0x' + process.env.PK);
    const response = await this.apiKit.addSafeDelegate({
      delegateAddress,
      delegatorAddress: wallet.address,
      safeAddress: this.safeAddress,
      signer: wallet,
      label: 'round-proposer',
    });

    return response;
  }

  async proposeTxs(txs) {
    console.log(1);
    console.log('txs: ', txs);
    if (!this.protocolKit) {
      this.protocolKit = await ProtocolKit.default.init({
        signer: '0x' + process.env.DELEGATE,
        provider: this.rpcUrl,
        safeAddress: this.safeAddress,
      });
    }
    console.log(2);
    for (const batchTxs of txs) {
      console.log('batchTxs: ', batchTxs);
      console.log(3);
      const nonce = await this.apiKit.getNextNonce(this.safeAddress);
      console.log('nonce: ', nonce);
      console.log(4);
      const safeTransaction =
        await this.protocolKit.createTransaction({
          transactions: batchTxs,
          options: { nonce },
        });
      console.log(5);
      console.log(safeTransaction);
      const safeTxHash = await this.protocolKit.getTransactionHash(
        safeTransaction
      );
      console.log(6);
      const senderSignature = await this.protocolKit.signHash(
        safeTxHash
      );
      console.log(7);
      await this.apiKit.proposeTransaction({
        safeAddress: this.safeAddress,
        safeTransactionData: safeTransaction.data,
        safeTxHash,
        senderAddress: senderSignature.signer,
        senderSignature: senderSignature.data,
        origin: '0',
      });

      this.safeTransactions.push({ safeTxHash });
    }
  }

  // THIS IS A VALID REQUEST BODY FOR DEBUGGING SAFE API ISSUES
  // {
  //   "to": "0xA1dabEF33b3B82c7814B6D82A79e50F4AC44102B",
  //   "value": "0",
  //   "data": "0x8d80ff0a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000b2006065c2c0d01f4ee0f421bf4bce7a7e911d17a2c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d09de08a006065c2c0d01f4ee0f421bf4bce7a7e911d17a2c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004d09de08a0000000000000000000000000000",
  //   "operation": 1,
  //   "baseGas": "0",
  //   "gasPrice": "0",
  //   "gasToken": "0x0000000000000000000000000000000000000000",
  //   "refundReceiver": "0x0000000000000000000000000000000000000000",
  //   "nonce": 1,
  //   "safeTxGas": "0",
  //   "contractTransactionHash": "0xd99c2ab7a7d8292697824bef285bc6daebeadc79b71948dc9e346203b4e63e05",
  //   "sender": "0xa6e12EDe427516a56a5F6ab6e06dD335075eb04b",
  //   "signature": "0x7af050142e5ee8a37d07adc2315b52516ec4ffc467202adab27b81c5c5b2d928131c795cf4d282e7de5d550eff46b29b214440dbd55ff5931658af35cca410741f",
  //   "origin": "0"
  // }
}
