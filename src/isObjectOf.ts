import { hasPropOf } from "./hasPropOf.js";
import { isObject } from "./isObject.js";
import { NarrowOf } from "./types.js";
import {
  collectValidationIssues,
  createValidationIssue,
  withValidation,
} from "./validation.js";
import type { ValidationIssue } from "./validation.js";

type TargetOfNarrow<Target> = Target extends NarrowOf<infer U> ? U : never;
type NarrowAny = NarrowOf<unknown>;
type NarrowFuncRecord = Record<string | symbol | number, NarrowAny>;

export const isObjectOf =
  <Target extends NarrowFuncRecord>(map: Target) =>
  {
    const narrow = (
      target: unknown
    ): target is { [K in keyof Target]: TargetOfNarrow<Target[K]> } =>
      isObject(target) &&
      Object.keys(map).every((key) => hasPropOf(key, map[key])(target));

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      if (!isObject(target)) {
        return [createValidationIssue(path, "invalid_type", "object", target)];
      }

      const issues: ValidationIssue[] = [];

      for (const key of Object.keys(map)) {
        issues.push(
          ...collectValidationIssues(hasPropOf(key, map[key]), target, path)
        );
      }

      return issues;
    });
  };
