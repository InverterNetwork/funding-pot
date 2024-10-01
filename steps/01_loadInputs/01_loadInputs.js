import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const loadInputs = (projectName, batch) => {
  return {
    ...loadConfigs(projectName, batch),
    ...loadbatchReports(projectName),
  };
};

const loadConfigs = (projectName, batch) => {
  const basePath = getBasePath('input');

  // load project config (= project-specific constants)
  const projectsConfig = JSON.parse(
    fs.readFileSync(path.join(__dirname, `${basePath}/projects.json`))
  );

  // load allowlist
  const allowlist = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, `${basePath}/allowlist.json`)
    )
  );

  // load batch config (batch-specific constants such as allowlist, start & end block, vesting schedule)
  const batchConfig = JSON.parse(
    fs.readFileSync(
      path.join(__dirname, `${basePath}/batches/${batch}.json`)
    )
  );

  return {
    projectConfig: projectsConfig[projectName],
    allowlist: allowlist.map((addr) => addr.toLowerCase()),
    batchConfig,
  };
};

const loadbatchReports = (projectName) => {
  const batchReportsPath = path.join(
    __dirname,
    `${getBasePath('output')}/${projectName}`
  );

  const batchReports = {};
  try {
    const files = fs.readdirSync(batchReportsPath);
    files.forEach((file) => {
      const filePath = path.join(batchReportsPath, file);
      const report = fs.readFileSync(filePath, 'utf8');
      const key = path.basename(file, '.json');
      batchReports[key] = JSON.parse(report);
    });
    if (Object.keys(batchReports).length > 0) {
      return { batchReports };
    }
  } catch (err) {
    console.error('ERROR - could not read batchReports:', err);
  }
  return;
};

const getBasePath = (dataType) =>
  `../../data/${process.env.NODE_ENV}/${dataType}`;
