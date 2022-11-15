export const isNumber = <Target extends number>(
  target: unknown
): target is Target => typeof target === "number";
