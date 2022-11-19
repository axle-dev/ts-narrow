export const assert = (
  condition: unknown,
  error: Error | string = "This value was promised to be there."
): asserts condition => {
  if (!condition) throw error instanceof Error ? error : new Error(error);
};
