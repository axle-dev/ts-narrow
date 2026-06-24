import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const hasElementAt =
  <
    Pos extends number,
    T extends { [K in Pos]: unknown } = { [K in Pos]: unknown }
  >(
    at: Pos
  ) => {
    const narrow = (target: unknown): target is T =>
      target instanceof Array && at in target;

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (!(target instanceof Array)) {
        return [createValidationIssue(path, "invalid_type", "array", target)];
      }

      return [
        createValidationIssue(
          [...path, at],
          "missing_element",
          "present element",
          undefined,
          `Expected element at index ${at} to be present.`
        ),
      ];
    });
  };
