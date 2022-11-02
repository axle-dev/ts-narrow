export const isStringLiteral =
  <TargetLiteral extends string | number>(l: `${TargetLiteral}`) =>
  (target: unknown): target is TargetLiteral =>
    target === l;
