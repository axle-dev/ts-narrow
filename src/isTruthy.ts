export const isTruthy = <Target>(
  target: Target | undefined | null,
  message: string = "This value was promised to be there."
): Target => {
  if (target === undefined || target === null) {
    throw new Error(message);
  }

  return target;
};
