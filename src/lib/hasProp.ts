export const hasProp =
  <Target extends unknown, PropName extends string | symbol | number>(
    propName: PropName
  ) =>
  (target: unknown): target is { [K in PropName]: Target } =>
    typeof target === "object" && target !== null && propName in target;
