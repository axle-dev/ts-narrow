import { isObject } from "./isObject.js";
import { NarrowOf } from "./types.js";
import {
  collectValidationIssues,
  createValidationIssue,
  withValidation,
} from "./validation.js";
import type { ValidationIssue } from "./validation.js";

export const isRecordOf =
  <Target>(f: NarrowOf<Target>) =>
  {
    const narrow = (
      target: unknown
    ): target is typeof target extends Record<infer TKeys, any>
      ? Record<TKeys, Target>
      : Record<string | number | symbol, Target> =>
      isObject(target) &&
      target !== null &&
      Object.values(target).every((i) => f(i));

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (!isObject(target) || target === null) {
        return [createValidationIssue(path, "invalid_type", "record", target)];
      }

      const issues: ValidationIssue[] = [];

      for (const [key, value] of Object.entries(target)) {
        issues.push(...collectValidationIssues(f, value, [...path, key]));
      }

      return issues;
    });
  };
