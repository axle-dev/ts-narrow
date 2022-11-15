export const isArray = <Target extends unknown>(
  array: unknown
): array is Target[] => array instanceof Array;
