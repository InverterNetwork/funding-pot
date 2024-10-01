import '../../env.js';

import { describe, it } from 'node:test';
import assert from 'node:assert';

import { validateInputs } from './02_validateInputs.js';

describe('#validateInputs', () => {
  const projectConfig = {
    SAFE: '0x4ffe42c1666e50104e997DD07E43c673FD39C81d',
    ORCHESTRATOR: '0x4ffe42c1666e50104e997DD07E43c673FD39C81d',
    NFT: '0xa47f284a5be76c10b902446acb1aea9550f4c71d',
  };
  const batchConfig = {
    VESTING_DETAILS: {
      START: 1,
      CLIFF: 2,
      END: 10,
    },
    LIMITS: {
      TOTAL: '500000',
      INDIVIDUAL: '5000',
    },
    IS_EARLY_ACCESS: false,
  };
  const allowlist = ['0x327f6bc1b86eca753bfd2f8187d22b6aef7783eb'];
  const batchReports = {
    1: {},
    2: {},
  };

  const batchNr = 1;

  describe('with batchNr = 1', () => {
    describe('without batchReports', () => {
      it('does not throw', () => {
        assert.doesNotThrow(() => {
          validateInputs({
            projectConfig,
            batchConfig,
            allowlist,
            batchNr,
          });
        });
      });
    });
  });

  describe('with batchNr = 3', () => {
    const thirdBatch = 3;

    describe('when there are less batchReports than the batchNr suggests', () => {
      it('throws', () => {
        assert.throws(
          () => {
            validateInputs({
              projectConfig,
              batchConfig,
              allowlist,
              batchNr: thirdBatch,
              batchReports: { 1: {} },
            });
          },
          {
            name: 'Error',
            message:
              'Current batch nr is 3, but there are only 1 previous batchReports',
          }
        );
      });
    });

    describe('when there is a gap between report numbers', () => {
      it('throws', () => {
        assert.throws(
          () => {
            validateInputs({
              projectConfig,
              batchConfig,
              allowlist,
              batchNr: thirdBatch,
              batchReports: { 1: {}, 3: {} },
            });
          },
          {
            name: 'Error',
            message: 'Report missing for batchNr 2',
          }
        );
      });
    });

    describe('with batchReports', () => {
      it('does not throw', () => {
        assert.doesNotThrow(() => {
          validateInputs({
            projectConfig,
            batchConfig,
            allowlist,
            batchNr: thirdBatch,
            batchReports,
          });
        });
      });
    });
  });

  describe('with empty configs', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig: {},
            batchConfig: {},
            allowlist: [],
            batchReports: {},
          });
        },
        {
          name: 'Error',
          message: 'SAFE missing or invalid address',
        }
      );
    });
  });

  describe('without SAFE', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig: {
              ...projectConfig,
              SAFE: undefined,
            },
            batchConfig,
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'SAFE missing or invalid address',
        }
      );
    });
  });

  // write test of all combinattions
  describe('without ORCHESTRATOR', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig: {
              ...projectConfig,
              ORCHESTRATOR: undefined,
            },
            batchConfig,
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'ORCHESTRATOR missing or invalid address',
        }
      );
    });
  });

  describe('without START', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: {
              ...batchConfig,
              VESTING_DETAILS: {
                ...batchConfig.VESTING_DETAILS,
                START: undefined,
              },
            },
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'VESTING_DETAILS missing or empty',
        }
      );
    });
  });

  describe('without CLIFF', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: {
              ...batchConfig,
              VESTING_DETAILS: {
                ...batchConfig.VESTING_DETAILS,
                CLIFF: undefined,
              },
            },
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'VESTING_DETAILS missing or empty',
        }
      );
    });
  });

  describe('without END', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: {
              ...batchConfig,
              VESTING_DETAILS: {
                ...batchConfig.VESTING_DETAILS,
                END: undefined,
              },
            },
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'VESTING_DETAILS missing or empty',
        }
      );
    });
  });

  describe('with START > END', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: {
              ...batchConfig,
              VESTING_DETAILS: {
                ...batchConfig.VESTING_DETAILS,
                START: 10,
                END: 1,
              },
            },
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'Vesting: START > END',
        }
      );
    });
  });

  describe('with START + CLIFF > END', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: {
              ...batchConfig,
              VESTING_DETAILS: {
                ...batchConfig.VESTING_DETAILS,
                START: 1,
                CLIFF: 3,
                END: 2,
              },
            },
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'Vesting: START + CLIFF > END',
        }
      );
    });
  });

  describe('with empty allowlist', () => {
    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig,
            allowlist: [],
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'ALLOWLIST missing or empty',
        }
      );
    });
  });

  describe('without LIMITS', () => {
    const configWithoutLimits = { ...batchConfig };
    delete configWithoutLimits.LIMITS;

    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: configWithoutLimits,
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'LIMITS missing or empty',
        }
      );
    });
  });

  describe('without IS_EARLY_ACCESS flag', () => {
    const configWithoutFlag = { ...batchConfig };
    delete configWithoutFlag.IS_EARLY_ACCESS;

    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig,
            batchConfig: configWithoutFlag,
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'IS_EARLY_ACCESS missing or empty',
        }
      );
    });
  });

  describe('without NFT', () => {
    const projectConfigWithoutNft = { ...projectConfig };
    delete projectConfigWithoutNft.NFT;

    it('throws an error', () => {
      assert.throws(
        () => {
          validateInputs({
            projectConfig: projectConfigWithoutNft,
            batchConfig,
            allowlist,
            batchReports,
          });
        },
        {
          name: 'Error',
          message: 'NFT missing or invalid address',
        }
      );
    });
  });
});
