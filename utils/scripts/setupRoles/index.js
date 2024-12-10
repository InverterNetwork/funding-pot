import '../../../env.js';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { setupRoles } from './setupRoles.js';

const [, , PROJECT_NAME] = process.argv;

// get roles config
const rolesConfig = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, '../inputs/roles.json'),
    'utf8'
  )
);
const projectsConfig = JSON.parse(
  fs.readFileSync(
    path.join(
      __dirname,
      `../../../data/${process.env.NODE_ENV}/input/projects.json`
    ),
    'utf8'
  )
);
const { workflowAdmin } = rolesConfig;
const { feeClaimer, feeRecipient } =
  rolesConfig.projects[PROJECT_NAME];
const projectConfig = projectsConfig[PROJECT_NAME];
// exclamation mark emoji
console.info('INPUTS:');
console.info('> project name:      ', PROJECT_NAME);
console.info('> workflow admin:    ', workflowAdmin);
console.info('> fee claimer:       ', feeClaimer);
console.info('> fee recipient:     ', feeRecipient);
console.info('> orchestrator:      ', projectConfig.ORCHESTRATOR);

const runScript = async () => {
  // iterate over all projects
  for (const projectName in projectsConfig) {
    const projectConfig = projectsConfig[projectName];

    if (!projectConfig) {
      console.error(`Project ${projectName} not found`);
      continue;
    }

    await setupRoles(
      workflowAdmin,
      projectConfig.ORCHESTRATOR,
      feeClaimer,
      feeRecipient
    );
  }
};

runScript();
