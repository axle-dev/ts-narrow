export const isArray = <T extends unknown>(array: unknown): array is T[] =>
  array instanceof Array;
