export const isEnumValueOf =
  <T extends Record<string, string | number>>(e: T) =>
  (target: unknown): target is T[keyof T] =>
    Object.values(e).some((i) => i === target);
