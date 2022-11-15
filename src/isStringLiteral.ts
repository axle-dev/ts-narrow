export const isStringLiteral =
  <Target extends string | number>(l: `${Target}`) =>
  (target: unknown): target is Target =>
    target === l;
