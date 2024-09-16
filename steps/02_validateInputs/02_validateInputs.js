import { isAddress } from 'viem';

export const validateInputs = ({
  batchNr,
  projectConfig,
  batchConfig,
  allowlist,
  reports,
}) => {
  validateEnvVars();
  validateConfigs({
    projectConfig,
    batchConfig,
    allowlist,
  });
  validateReports({ batchNr, reports });
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
  const {
    VESTING_DETAILS: { START, CLIFF, END },
  } = batchConfig;
  const { SAFE, ORCHESTRATOR } = projectConfig;

  if (!SAFE || !isAddress(SAFE))
    throw new Error('SAFE missing or invalid address');
  if (!ORCHESTRATOR || !isAddress(ORCHESTRATOR))
    throw new Error('ORCHESTRATOR missing or invalid address');

  if (!allowlist || allowlist.length === 0)
    throw new Error('ALLOWLIST missing or empty');
  if (!START || !CLIFF || !END)
    throw new Error('VESTING_DETAILS missing or empty');
  if (parseInt(START) > parseInt(END))
    throw new Error('Vesting: START > END');
  if (parseInt(START) + parseInt(CLIFF) > parseInt(END))
    throw new Error('Vesting: START > END');
};

const validateReports = ({ reports, batchNr }) => {
  if (batchNr == 1) return;

  if (!reports) throw new Error('Reports missing');

  const reportNumbers = Object.keys(reports);
  console.log(reportNumbers);

  if (batchNr - reportNumbers.length > 1)
    throw new Error(
      `Current batch nr is ${batchNr}, but there are only ${reportNumbers.length} previous reports`
    );

  for (let i = 1; i < reportNumbers.length; i++) {
    if (!reportNumbers.includes(reportNumbers[i]))
      throw new Error(`Report missing: ${reportNumbers[i]}`);
  }
};
