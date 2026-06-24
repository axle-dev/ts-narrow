import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const hasProp =
  <Target extends unknown, PropName extends string | symbol | number>(
    propName: PropName
  ) => {
    const narrow = (target: unknown): target is { [K in PropName]: Target } =>
      typeof target === "object" && target !== null && propName in target;

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (typeof target !== "object" || target === null) {
        return [
          createValidationIssue(
            path,
            "invalid_type",
            `object with property ${String(propName)}`,
            target
          ),
        ];
      }

      return [
        createValidationIssue(
          [...path, propName],
          "missing_property",
          "present property",
          undefined,
          `Expected ${String(propName)} to be present.`
        ),
      ];
    });
  };
