export const isArrayOf =
  <T = unknown>(f: (element: unknown) => element is T) =>
  (array: unknown): array is T[] =>
    array instanceof Array && array.every(f);
