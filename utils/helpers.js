export const keysToLowerCase = (obj) =>
  Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [
      key.toLowerCase(),
      value,
    ])
  );