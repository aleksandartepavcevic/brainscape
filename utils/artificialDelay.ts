/**
 * Add artificial delay
 * @param promise
 * @param ms
 * @returns
 */

export const artificialDelay = async <T>(promise: Promise<T>, ms: number) => {
  const [p] = await Promise.all([promise, sleep(ms)]);

  return p;
};

const sleep = async (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
