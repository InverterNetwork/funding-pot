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
