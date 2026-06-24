import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

type LiteralOf<T> = T extends string ? `${T}` : T extends number ? T : T;

export const isLiteral =
  <TargetLiteral>(l: LiteralOf<TargetLiteral>) => {
    const narrow = (
    target: unknown
  ): target is TargetLiteral extends string
    ? `${TargetLiteral}`
    : TargetLiteral =>
    target === l;

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_literal",
              JSON.stringify(l),
              target
            ),
          ]
    );
  };
