export const isInstanceOf =
  <Target extends Function>(e: Target) =>
  (target: unknown): target is Target =>
    target instanceof e;
