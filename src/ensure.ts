export const ensure = <Target>(
  target: Target | undefined | null,
  error: string | Error = "This value was promised to be there."
): Target => {
  if (target === undefined || target === null) {
    throw error instanceof Error ? error : new Error(error);
  }

  return target;
};
