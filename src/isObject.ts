export const isObject = <Target extends object>(
  target: unknown
): target is Target => typeof target === "object";
