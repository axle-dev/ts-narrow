import type { OneOfTypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowOf } from "./types.js";
import {
  createValidationIssue,
  withValidation,
} from "./validation.js";

export const isOneOf =
  <T extends NarrowOf<unknown>[]>(...args: T) =>
  {
    const narrow = (
      target: unknown
    ): target is OneOfTypesFromNarrowFuncFixedArray<T> =>
      args.some((f) => f(target));

    return withValidation(narrow, (target, path) =>
      narrow(target)
        ? []
        : [
            createValidationIssue(
              path,
              "invalid_union",
              "one matching predicate",
              target
            ),
          ]
    );
  };
