export const isArray = (array: unknown): array is unknown[] =>
  array instanceof Array;
