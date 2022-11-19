export const isTruthy = <Target>(
  target: Target
): target is Exclude<Target, null | undefined> =>
  target !== null && target !== undefined;
