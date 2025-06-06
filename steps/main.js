import { loadInputs } from './01_loadInputs/01_loadInputs.js';
import { validateInputs } from './02_validateInputs/02_validateInputs.js';
import { instantiateServices } from './03_instantiateServices/03_instantiateServices.js';
import { defineBatch } from './04_defineBatch/04_defineBatch.js';
import { proposeBatch } from './05_proposeBatch/05_proposeBatch.js';
import { storeReport } from './06_storeReport/06_storeReport.js';
import { WITH_PROPOSING } from '../config.js';
export const main = async (season, projectName, batchNr) => {
  console.info(
    `🚀 Starting batch execution for season ${season} for project ${projectName} for batch ${batchNr}`
  );

  // load configs & batchReports
  console.info(`1️⃣ Loading configs...`);
  const { projectsConfig, batchReports } = loadInputs(
    season,
    projectName,
    batchNr
  );

  const projectConfig = projectsConfig[projectName];
  const batchConfig = projectConfig.BATCH_CONFIGS[batchNr];

  // checks if all required inputs are set in configs
  console.info(`2️⃣ Validating inputs...`);
  const { skip } = validateInputs({
    batchNr,
    projectsConfig,
    projectName,
    batchConfig,
    batchReports,
  });

  if (skip) {
    console.info(
      `🚫 Report already exist, skipping project batch...`
    );
    return;
  }

  // instantiate services
  console.info(`3️⃣ Instantiating services...`);
  const {
    safeService,
    transactionBuilderService,
    batchService,
    queryService,
  } = await instantiateServices(
    projectConfig,
    batchConfig,
    batchReports
  );

  // define batch (= contributions, eligibility, received allocations, vesting details etc.)
  console.info(`4️⃣ Defining batch...`);
  await defineBatch({
    queryService,
    batchService,
    projectConfig,
    batchConfig,
  });

  if (batchService.data.totalValidContribution.inCollateral > 0n) {
    // propose batch transactions to safe (= batch buy tx, vesting txs) via Transaction API
    console.info(`5️⃣ Proposing batch...`);
    await proposeBatch({
      batchService,
      queryService,
      transactionBuilderService,
      safeService,
      skipPropose: batchConfig.ONLY_REPORT || WITH_PROPOSING,
    });
  }

  let transactionJsons;
  if (!WITH_PROPOSING) {
    transactionJsons = transactionBuilderService.getTransactionJsons(
      `[FUNDING_POT]-[PROJECT-${projectName}]-[BATCH-${batchNr}]`,
      `Batch ${batchNr} for ${projectName}`
    );
    transactionBuilderService.saveTransactionJsons(transactionJsons);
  }

  // store comprehensive report in a JSON file
  console.info(`6️⃣ Storing report...`);
  await storeReport(projectName, batchNr, {
    batchService,
    safeService,
    transactionBuilderService,
    queryService,
    projectConfig,
    batchConfig,
    transactionJsons,
    batchReports,
  });

  console.info(`🏁 Batch execution complete!`);
};
