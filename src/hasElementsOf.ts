import { isArray } from "./isArray.js";
import type { NarrowOf, FixedArrayValues } from "./types.js";
import {
  collectValidationIssues,
  createValidationIssue,
  formatPath,
  withValidation,
} from "./validation.js";

export const hasElementsOf =
  <NarrowFuncFixedArray extends readonly NarrowOf<unknown>[]>(
    elements: NarrowFuncFixedArray
  ) => {
    const narrow = (
      target: unknown
    ): target is FixedArrayValues<NarrowFuncFixedArray> => {
      if (!isArray(target)) return false;
      if (elements.length !== target.length) return false;
      for (let i = 0; i < elements.length; i += 1) {
        if (!elements[i](target[i])) {
          return false;
        }
      }

      return true;
    };

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (!isArray(target)) {
        return [createValidationIssue(path, "invalid_type", "array", target)];
      }

      const issues = [];

      if (elements.length !== target.length) {
        issues.push(
          createValidationIssue(
            path,
            "invalid_length",
            `array length ${elements.length}`,
            target,
            `Expected ${formatPath(path)} to have length ${elements.length}, received ${target.length}.`
          )
        );
      }

      for (let i = 0; i < elements.length; i += 1) {
        issues.push(...collectValidationIssues(elements[i], target[i], [...path, i]));
      }

      return issues;
    });
  };
