import { isAddress } from 'viem';

export const validateInputs = ({
  batchNr,
  projectConfig,
  batchConfig,
  allowlist,
  batchReports,
}) => {
  validateEnvVars();
  validateConfigs({
    projectConfig,
    batchConfig,
    allowlist,
  });
  validatebatchReports({ batchNr, batchReports });
};

const validateEnvVars = () => {
  const { ANKR_API_KEY, ANKR_NETWORK_ID, CHAIN_ID, INDEXER_URL } =
    process.env;

  if (!ANKR_API_KEY) throw new Error('ANKR_API_KEY missing');
  if (!ANKR_NETWORK_ID) throw new Error('ANKR_NETWORK_ID missing');
  if (!CHAIN_ID) throw new Error('CHAIN_ID missing');
  if (!INDEXER_URL) throw new Error('INDEXER_URL missing');
};

const validateConfigs = ({
  projectConfig,
  batchConfig,
  allowlist,
}) => {
  const { VESTING_DETAILS, LIMITS, IS_EARLY_ACCESS } = batchConfig;
  const { SAFE, ORCHESTRATOR, NFT } = projectConfig;

  if (!SAFE || !isAddress(SAFE))
    throw new Error('SAFE missing or invalid address');
  if (!ORCHESTRATOR || !isAddress(ORCHESTRATOR))
    throw new Error('ORCHESTRATOR missing or invalid address');
  if (!NFT || !isAddress(NFT))
    throw new Error('NFT missing or invalid address');

  if (IS_EARLY_ACCESS === undefined)
    throw new Error('IS_EARLY_ACCESS missing or empty');
  if (!LIMITS || !LIMITS.TOTAL || !LIMITS.INDIVIDUAL)
    throw new Error('LIMITS missing or empty');
  if (!allowlist || allowlist.length === 0)
    throw new Error('ALLOWLIST missing or empty');
  if (
    !VESTING_DETAILS ||
    !VESTING_DETAILS.START ||
    !VESTING_DETAILS.CLIFF ||
    !VESTING_DETAILS.END
  )
    throw new Error('VESTING_DETAILS missing or empty');
  if (parseInt(VESTING_DETAILS.START) > parseInt(VESTING_DETAILS.END))
    throw new Error('Vesting: START > END');
  if (
    parseInt(VESTING_DETAILS.START) +
      parseInt(VESTING_DETAILS.CLIFF) >
    parseInt(VESTING_DETAILS.END)
  )
    throw new Error('Vesting: START + CLIFF > END');
};

const validatebatchReports = ({ batchReports, batchNr }) => {
  if (batchNr == 1) return;

  if (!batchReports) throw new Error('batchReports missing');

  const reportNumbers = Object.keys(batchReports);

  if (batchNr - reportNumbers.length > 1)
    throw new Error(
      `Current batch nr is ${batchNr}, but there are only ${reportNumbers.length} previous batchReports`
    );

  for (let i = 1; i <= reportNumbers.length; i++) {
    if (!reportNumbers.includes(i.toString())) {
      throw new Error(`Report missing for batchNr ${i}`);
    }
  }
};
