export const isIndexOf =
  <Target extends Record<keyof unknown, unknown>>(enumToCompare: Target) =>
  (target: any): target is keyof Target =>
    target in enumToCompare;
