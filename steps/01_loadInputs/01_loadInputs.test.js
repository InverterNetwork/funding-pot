import '../../env.js';

import { describe, it, before } from 'node:test';
import assert from 'node:assert';
import { loadInputs } from './01_loadInputs.js';
import { createAndSaveAllowlist } from '../../utils/testUtils/testHelpers.js';

describe('#loadInputs', () => {
  before(async () => {
    await createAndSaveAllowlist();
  });

  describe('with existing batch number', () => {
    describe('without previous batch batchReports', () => {
      const projectName = 'STATIC_TEST_PROJECT_1';
      const batchNumber = 1;

      it('returns the configs: projectsConfig, allowlist, batchConfig', () => {
        const inputs = loadInputs(projectName, batchNumber);

        assert.deepEqual(Object.keys(inputs), [
          'projectConfig',
          'allowlist',
          'batchConfig',
        ]);
      });
    });

    describe('with previous batch batchReports', () => {
      const projectName = 'STATIC_TEST_PROJECT_2';
      const batchNumber = 2;

      it('returns the configs: projectsConfig, allowlist, batchConfig, batchReports', () => {
        const inputs = loadInputs(projectName, batchNumber);

        assert.deepEqual(Object.keys(inputs), [
          'projectConfig',
          'allowlist',
          'batchConfig',
          'batchReports',
        ]);
      });
    });
  });

  describe('with non-existing batch number', () => {
    const batchNumber = 2;

    it('throws an error', () => {
      assert.throws(() => {
        loadInputs(batchNumber);
      });
    });
  });
});
