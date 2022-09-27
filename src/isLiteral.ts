export const isLiteral =
  <TargetLiteral>(l: TargetLiteral) =>
  (target: unknown): target is TargetLiteral =>
    target === l;
