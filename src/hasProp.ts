export const hasProp =
  <U extends string>(propName: U) =>
  (target: unknown): target is { [K in U]: unknown } =>
    typeof target === "object" && target !== null && propName in target;
