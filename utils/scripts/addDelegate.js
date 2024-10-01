import '../env.js';

import { Safe } from '../services/Safe/Safe.js';

// requires to have PK of safe owner stored in env
async function main() {
  const [, , SAFE, DELEGATE] = process.argv;

  const projectConfig = {
    SAFE,
  };

  const safeService = new Safe(
    process.env.CHAIN_ID,
    projectConfig,
    process.env.RPC_URL
  );

  console.info(
    `Adding delegate ${DELEGATE} to safe ${SAFE} on chain ${process.env.CHAIN_ID}`
  );

  const response = await safeService.addDelegate(DELEGATE);
}

main();
