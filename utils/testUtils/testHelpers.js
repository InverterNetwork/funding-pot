import assert from 'node:assert';
import { parseUnits } from 'viem';
import * as chains from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

import { allowlist } from './staticTestData.js';

export const getChain = (chainId) => {
  for (const chain of Object.values(chains)) {
    if ('id' in chain) {
      if (chain.id === parseInt(chainId)) {
        return chain;
      }
    }
  }

  throw new Error(`Chain with id ${chainId} not found`);
};

export const createAllowlist = () => {
  const ownerAccount = privateKeyToAccount(process.env.PK);
  const delegateAccount = privateKeyToAccount(process.env.DELEGATE);

  const allowlist = [
    { address: ownerAccount.address, kycType: 'zkId' },
    { address: delegateAccount.address, kycType: 'GTCPass' },
  ];

  return allowlist;
};

export const mockAllowlist = ({ type }) => {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (url, options) => {
    if (url.includes(process.env.BACKEND_URL)) {
      return {
        json: async () => ({
          data: {
            batchMintingEligibleUsersV2: {
              users:
                type === 'static'
                  ? allowlist
                  : createAllowlist().map((a) => ({
                      address: a.address.toLowerCase(),
                      kycType: a.kycType,
                    })),
            },
          },
        }),
      };
    }
    return originalFetch(url, options);
  };
};

export const inDollar = (tokenAmount, unitPrice) => {
  return parseUnits(
    (parseFloat(tokenAmount) * parseFloat(unitPrice)).toString(),
    18
  );
};

export const inCollateral = (tokenAmount, unitPrice) => {
  return parseUnits(
    (parseFloat(tokenAmount) / parseFloat(unitPrice)).toString(),
    18
  );
};

export function assertAlmostEqual(actual, expected, epsilon = 1e-9) {
  const diff = Math.abs(actual - expected);
  assert(
    diff < epsilon,
    `Expected ${actual} to be close to ${expected} (within ${epsilon})`
  );
}
