import { NarrowOf } from "./types.js";
import {
  collectValidationIssues,
  createValidationIssue,
  withValidation,
} from "./validation.js";
import type { ValidationIssue } from "./validation.js";

export const isArrayOf =
  <Target>(f: NarrowOf<Target>) =>
  {
    const narrow = (target: unknown): target is Target[] =>
      target instanceof Array && target.every(f);

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (!(target instanceof Array)) {
        return [createValidationIssue(path, "invalid_type", "array", target)];
      }

      const issues: ValidationIssue[] = [];

      for (let index = 0; index < target.length; index += 1) {
        issues.push(...collectValidationIssues(f, target[index], [...path, index]));
      }

      return issues;
    });
  };
