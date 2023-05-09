export const isEnumValueOf =
  <Target extends Record<string, unknown>>(e: Target) =>
  (target: unknown): target is Target[keyof Target] =>
    Object.values(e).some((value) => value === target);
