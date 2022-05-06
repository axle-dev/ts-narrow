export const isArrayOf =
  <NextTarget>(f: (element: unknown) => element is NextTarget) =>
  (target: unknown): target is NextTarget[] =>
    target instanceof Array && target.every(f);
