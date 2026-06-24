import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isInstanceOf =
  <T extends abstract new (...args: any) => any>(e: T) => {
    const narrow = (target: unknown): target is InstanceType<T> =>
      target instanceof e;

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_instance",
              `instance of ${e.name || "class"}`,
              target
            ),
          ]
    );
  };
