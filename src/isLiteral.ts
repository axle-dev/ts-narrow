type LiteralOf<T> = T extends string ? `${T}` : T extends number ? T : T;

export const isLiteral =
  <TargetLiteral>(l: LiteralOf<TargetLiteral>) =>
  (
    target: unknown
  ): target is TargetLiteral extends string
    ? `${TargetLiteral}`
    : TargetLiteral =>
    target === l;
