import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

import { NATIVE_TOKENS, AXELAR_RELAYS } from '../config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const keysToLowerCase = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.toLowerCase(),
      value,
    ])
  );

export const serializeBigInt = (obj) => {
  return JSON.stringify(
    obj,
    (key, value) =>
      typeof value === 'bigint' ? value.toString() : value,
    4
  );
};

export const getAnkrRpcUrl = () => {
  return `https://rpc.ankr.com/${process.env.ANKR_NETWORK_ID}/${process.env.ANKR_API_KEY}`;
};

export const getProjectNames = () => {
  const projectsConfig = JSON.parse(
    fs.readFileSync(
      path.join(
        __dirname,
        `../data/${process.env.NODE_ENV}/input/projects.json`
      )
    )
  );
  return Object.keys(projectsConfig);
};

export const isNativeToken = (token) =>
  NATIVE_TOKENS.map((t) => t.toLowerCase()).includes(
    token.toLowerCase()
  );

export const isAxelarRelay = (from) =>
  AXELAR_RELAYS.map((t) => t.toLowerCase()).includes(
    from.toLowerCase()
  );
