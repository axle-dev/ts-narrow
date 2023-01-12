export const isInstanceOf =
  <T extends abstract new (...args: any) => any>(e: T) =>
  (target: unknown): target is InstanceType<T> =>
    target instanceof e;
