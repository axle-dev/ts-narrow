import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isIndexOf =
  <Target extends Record<keyof unknown, unknown>>(enumToCompare: Target) => {
    const narrow = (target: any): target is keyof Target =>
      target in enumToCompare;

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_key",
              "object key",
              target
            ),
          ]
    );
  };
