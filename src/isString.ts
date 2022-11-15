export const isString = <Target extends string>(
  target: unknown
): target is Target => typeof target === "string";
