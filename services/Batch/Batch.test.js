import { describe, it, beforeEach } from 'node:test';
import assert from 'node:assert';
import { parseUnits } from 'viem';

import { Batch } from './Batch.js';
import {
  inflows,
  addresses,
  allowlist,
  batchConfig,
  nftHolders,
} from '../../utils/testUtils/staticTestData.js';

describe('Batch', () => {
  const addr1 = '0x6747772f37a4f7cfdea180d38e8ad372516c9548';
  const addr2 = '0xa6e12ede427516a56a5f6ab6e06dd335075eb04b';
  const addr3 = '0xcb1edf0e617c0fab6408701d58b746451ee6ce2f';
  const addr4 = '0xb4f8d886e9e831b6728d16ed7f3a6c27974abaa4';
  const contr1 = 3_000_000_000_000_000_000n;
  const contr2 = 4_000_000_000_000_000_000n;
  const contr3 = 5_000_000_000_000_000_000n;
  const contr4 = 6_000_000_000_000_000_000n;

  describe('#constructor', () => {
    describe('without previous batchReports', () => {
      const batchService = new Batch({ batchConfig });

      it('sets `totalLimit` and `individualLimit` in `data` to be equal to config inputs', () => {
        assert.equal(
          batchService.config.totalLimit,
          parseUnits(batchConfig.LIMITS.TOTAL, 18)
        );
        assert.equal(
          batchService.config.individualLimit,
          parseUnits(batchConfig.LIMITS.INDIVIDUAL, 18)
        );
      });
    });

    describe('with previous batchReports', () => {
      const mockBatchReports = {
        1: { totalValidContribution: '3000000000000000000' },
        2: { totalValidContribution: '2000000000000000000' },
      };

      const batchService = new Batch({
        batchConfig,
        batchReports: mockBatchReports,
      });

      it('accounts for previous batchReports', () => {
        assert.equal(
          batchService.config.totalLimit,
          4000000000000000000n
        );
        assert.equal(
          batchService.config.individualLimit,
          2000000000000000000n
        );
      });
    });
  });

  describe('#assessInflows', () => {
    const { addr1, addr2, addr3, addr4, addr5, addr6 } = addresses;
    const totalLimit = parseUnits(batchConfig.LIMITS.TOTAL, 18);
    const individualLimit = parseUnits(
      batchConfig.LIMITS.INDIVIDUAL,
      18
    );

    describe('when it is NOT an early access batch', () => {
      const batchService = new Batch({
        batchConfig,
      });

      beforeEach(() => {
        batchService.assessInflows(inflows, allowlist, nftHolders);
      });

      it('adds fields `totalContribution`, `totalValidContribution`, `totalInvalidContribution` and `participants`', () => {
        assert.deepStrictEqual(Object.keys(batchService.data), [
          'totalContribution',
          'totalValidContribution',
          'totalInvalidContribution',
          'participants',
        ]);
      });

      it('adds the transactions to the participants', () => {
        const participantAddresses = Object.values(addresses);

        for (const addr of participantAddresses) {
          const { transactions } =
            batchService.data.participants[addr];
          const participantInflowTxs = inflows
            .filter((i) => i.participant === addr)
            .map((i) => i.transactionHash);
          assert.deepStrictEqual(
            participantInflowTxs,
            transactions.map((t) => t.transactionHash)
          );
        }
      });

      it('calculates the correct `totalValidContribution`', () => {
        assert.equal(
          batchService.data.totalValidContribution,
          totalLimit
        );
      });

      it('calculates the correct `totalContribution`', () => {
        assert.equal(
          batchService.data.totalContribution,
          inflows.reduce((acc, curr) => acc + curr.contribution, 0n)
        );
      });

      it('calculates the correct `invalidContribution`', () => {
        assert.equal(
          batchService.data.totalInvalidContribution,
          inflows.reduce((acc, curr) => acc + curr.contribution, 0n) -
            totalLimit
        );
      });

      describe('with two contributions (addr1)', () => {
        const contributor = addr1;

        describe('when when the second contribution exceeds the individual cap', () => {
          it('splits between `validContribution` and `invalidContribution`', () => {
            const { participants } = batchService.data;
            const {
              contribution,
              invalidContribution,
              validContribution,
            } = participants[contributor];

            assert.equal(
              contribution,
              inflows[0].contribution + inflows[2].contribution
            );
            assert.equal(
              invalidContribution,
              inflows[2].contribution
            );
            assert.equal(validContribution, inflows[0].contribution);
          });
        });
      });

      describe('with one contribution (addr2)', () => {
        const contributor = addr2;

        describe('when contributor contributes above individual limit', () => {
          it('splits between `validContribution` and `invalidContribution`', () => {
            const { participants } = batchService.data;
            const {
              contribution,
              invalidContribution,
              validContribution,
            } = participants[contributor];

            assert.equal(contribution, inflows[1].contribution);
            assert.equal(
              invalidContribution,
              inflows[1].contribution - individualLimit
            );
            assert.equal(validContribution, individualLimit);
          });
        });
      });

      describe('without being on the allowlist (addr3)', () => {
        const contributor = addr3;

        it('considers all contributions as `invalidContribution`', () => {
          const { participants } = batchService.data;
          const {
            contribution,
            invalidContribution,
            validContribution,
          } = participants[contributor];

          assert.equal(contribution, 100000000000000000n);
          assert.equal(invalidContribution, 100000000000000000n);
          assert.equal(validContribution, 0n);
        });
      });

      describe('without any applicable restrictions (addr5)', () => {
        const contributor = addr5;

        it('counts the contribution as valid', () => {
          const { participants } = batchService.data;
          const {
            contribution,
            invalidContribution,
            validContribution,
          } = participants[contributor];

          assert.equal(contribution, 1700000000000000000n);
          assert.equal(invalidContribution, 0n);
          assert.equal(validContribution, 1700000000000000000n);
        });
      });

      describe('when contribution exceeds both individual and total cap', () => {
        describe('where the total cap is more restrictive (addr6)', () => {
          const contributor = addr6;

          it('counts the contribution as valid', () => {
            const { participants } = batchService.data;
            const {
              contribution,
              invalidContribution,
              validContribution,
            } = participants[contributor];

            assert.equal(contribution, 3000000000000000000n);
            assert.equal(invalidContribution, 1700000000000000000n);
            assert.equal(validContribution, 1300000000000000000n);
          });
        });

        describe('where the individual cap is more restrictive (addr4)', () => {
          const contributor = addr4;

          it("only considers the contribution that doesn't exceed the total cap as valid", () => {
            const { participants } = batchService.data;
            const {
              contribution,
              invalidContribution,
              validContribution,
            } = participants[contributor];

            assert.equal(contribution, totalLimit);
            assert.equal(
              invalidContribution,
              totalLimit - individualLimit
            );
            assert.equal(validContribution, individualLimit);
          });
        });
      });
    });

    describe('when it is an early access batch', () => {
      const batchService = new Batch({
        batchConfig: { ...batchConfig, IS_EARLY_ACCESS: true },
      });

      beforeEach(() => {
        batchService.assessInflows(inflows, allowlist, nftHolders);
      });

      it('includes only valid contributions from NFT holders', () => {
        const { participants } = batchService.data;
        const participantsWithValidContributions = Object.entries(
          participants
        )
          .filter(([, data]) => data.validContribution > 0n)
          .map(([address]) => address);
        assert.deepStrictEqual(
          participantsWithValidContributions,
          nftHolders
        );
      });
    });
  });

  describe('#calcAllocations', () => {
    const additionalIssuance = 100_000_000_000_000_000_000n;
    const totalValidContribution = contr1 + contr2 + contr3;

    const data = {
      totalValidContribution,
      additionalIssuance,
      participants: {
        [addr1]: {
          validContribution: contr1,
        },
        [addr2]: {
          validContribution: contr2,
        },
        [addr3]: {
          validContribution: contr3,
        },
        [addr4]: {
          invalidContribution: contr4,
        },
      },
    };

    const batchService = new Batch({
      batchConfig,
    });
    batchService.data = data;

    it('adds an `issuanceAllocation` field containing the allocation for each contributor', () => {
      batchService.calcAllocations(additionalIssuance);

      const { participants, totalValidContribution } =
        batchService.data;

      assert.equal(
        participants[addr1].issuanceAllocation,
        25000000000000000000n // without decimals: 3 / 12 * 100 = 25
      );
      assert.equal(
        participants[addr2].issuanceAllocation,
        33333300000000000000n // without decimals: 4 / 12 * 100 = 33.3333 (rounded down)
      );
      assert.equal(
        participants[addr3].issuanceAllocation,
        41666600000000000000n // without decimals: 5 / 12 * 100 = 41.6666 (rounded down)
      );
    });
  });

  describe('#getAllocations', () => {
    const data = {
      participants: {
        [addr1]: {
          issuanceAllocation: contr1,
        },
        [addr2]: {
          issuanceAllocation: contr2,
        },
        [addr3]: {
          invalidContribution: contr3,
        },
      },
    };
    const batchService = new Batch({
      batchConfig,
    });
    batchService.data = data;

    it('returns an object with the addresses as keys and their allocations as values', () => {
      const allocations = batchService.getAllocations();
      assert.deepStrictEqual(allocations, [
        {
          recipient: addr1,
          amount: contr1,
        },
        {
          recipient: addr2,
          amount: contr2,
        },
      ]);
    });
  });
});
