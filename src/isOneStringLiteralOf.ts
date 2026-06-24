import type { TypesFromFixedArray } from "./types.js";
import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isOneStringLiteralOf =
  <T extends string[]>(...args: T) => {
    const narrow = (target: unknown): target is TypesFromFixedArray<T> =>
      args.some((f) => target === f);

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_literal_union",
              args.map((value) => JSON.stringify(value)).join(" | "),
              target
            ),
          ]
    );
  };
