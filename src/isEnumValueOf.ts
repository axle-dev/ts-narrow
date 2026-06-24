import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isEnumValueOf =
  <Target extends Record<string, unknown>>(e: Target) => {
    const narrow = (target: unknown): target is Target[keyof Target] =>
      Object.values(e).some((value) => value === target);

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_enum_value",
              "enum value",
              target
            ),
          ]
    );
  };
