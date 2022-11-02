export const isInstanceOf =
  <T extends Function>(e: T) =>
  (target: unknown): target is T =>
    target instanceof e;
