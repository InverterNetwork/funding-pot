import '../../env.js';

import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function main() {
  // remove allowlist
  try {
    fs.unlinkSync(
      path.join(__dirname, '../../data/test/input/allowlist.json')
    );
  } catch (e) {}

  // remove batch config 3.json
  try {
    fs.unlinkSync(
      path.join(__dirname, '../../data/test/input/batches/3.json')
    );
  } catch (e) {}

  // remove GENERATED_TEST_PROJECT from projects.json
  try {
    const projects = JSON.parse(
      fs.readFileSync(
        path.join(__dirname, '../../data/test/input/projects.json'),
        'utf8'
      )
    );
    if (projects && projects.GENERATED_TEST_PROJECT)
      delete projects.GENERATED_TEST_PROJECT;

    fs.writeFileSync(
      path.join(__dirname, '../../data/test/input/projects.json'),
      JSON.stringify(projects, null, 2),
      'utf8'
    );
  } catch (e) {}

  // remove test output file 3.json
  try {
    fs.unlinkSync(
      path.join(
        __dirname,
        '../../data/test/output/GENERATED_TEST_PROJECT/3.json'
      )
    );
  } catch (e) {}
}

main();
