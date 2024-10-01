import { spawn } from 'child_process';
import glob from 'glob';
import path from 'path';

// Define pattern to match all test files recursively
const pattern = path.join(process.cwd(), '**/*.test.js');

// Define pattern to exclude files ending with ".e2e.test.js"
const excludePattern = '**/*.e2e.test.js';

glob(pattern, { ignore: excludePattern }, (err, files) => {
  if (err) {
    console.error('Error fetching test files:', err);
    return;
  }

  if (files.length === 0) {
    console.error('No test files found.');
    return;
  }

  // Run tests using Node's test runner
  const testProcess = spawn('node', ['--test', ...files], {
    stdio: 'inherit',
  });

  testProcess.on('exit', (code) => {
    console.error(`Test process exited with code ${code}`);
  });
});
