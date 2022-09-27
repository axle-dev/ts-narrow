export const isEnumValueOf =
  <T extends Record<string, string | number>>(e: T) =>
  (target: unknown): target is T[keyof T] =>
    (typeof target === "string" || typeof target === "number") &&
    e[target] !== undefined &&
    e[target] !== null;
