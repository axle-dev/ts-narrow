export const isObject = <T extends object>(target: unknown): target is T =>
  typeof target === "object";
