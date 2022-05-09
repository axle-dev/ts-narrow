export const isNumber = <TargetNumber extends number>(
  target: unknown
): target is TargetNumber => typeof target === "number";
