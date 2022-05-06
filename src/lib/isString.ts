export const isString = <TargetString extends string>(
  target: unknown
): target is TargetString => typeof target === "string";
