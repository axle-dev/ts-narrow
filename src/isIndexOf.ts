export const isIndexOf =
  <Target extends Record<string, unknown>>(enumToCompare: Target) =>
  (target: string | number | symbol): target is keyof Target =>
    target in enumToCompare;
