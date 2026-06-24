import type { UnionOfTypesFromNarrowFuncFixedArray } from "./types.js";
import { NarrowOf } from "./types.js";
import {
  collectValidationIssues,
  withValidation,
} from "./validation.js";
import type { ValidationIssue } from "./validation.js";

export const isUnionOf =
  <T extends NarrowOf<unknown>[]>(...args: T) =>
  {
    const narrow = (
      target: unknown
    ): target is UnionOfTypesFromNarrowFuncFixedArray<T> =>
      args.every((f) => f(target));

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      const issues: ValidationIssue[] = [];

      for (const f of args) {
        issues.push(...collectValidationIssues(f, target, path));
      }

      return issues;
    });
  };
