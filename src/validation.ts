import type { NarrowOf } from "./types.js";

export type ValidationPath = Array<string | number | symbol>;

export type ValidationIssue = {
  path: ValidationPath;
  code: string;
  expected: string;
  received: string;
  message: string;
};

export type ValidationResult<T> =
  | { success: true; value: T; errors: [] }
  | { success: false; errors: ValidationIssue[] };

type Validator<T> = (target: unknown, path: ValidationPath) => ValidationIssue[];

const validators = new WeakMap<NarrowOf<unknown>, Validator<unknown>>();

export const withValidation = <T, Func extends NarrowOf<T>>(
  narrow: Func,
  validator: Validator<T>
): Func => {
  validators.set(narrow as NarrowOf<unknown>, validator as Validator<unknown>);

  return narrow;
};

export const getReceived = (target: unknown): string => {
  if (target === null) return "null";
  if (target === undefined) return "undefined";
  if (target instanceof Array) return "array";
  if (target instanceof Date) return "Date";

  return typeof target;
};

export const formatPath = (path: ValidationPath): string => {
  if (path.length === 0) return "value";

  return path
    .map((part) => (typeof part === "symbol" ? part.toString() : String(part)))
    .join(".");
};

export const createValidationIssue = (
  path: ValidationPath,
  code: string,
  expected: string,
  target: unknown,
  message = `Expected ${formatPath(path)} to be ${expected}, received ${getReceived(
    target
  )}.`
): ValidationIssue => ({
  path,
  code,
  expected,
  received: getReceived(target),
  message,
});

export const createPredicateValidator =
  <T>(narrow: NarrowOf<T>, expected: string, code = "invalid_type") =>
  (target: unknown, path: ValidationPath): ValidationIssue[] =>
    narrow(target)
      ? []
      : [createValidationIssue(path, code, expected, target)];

export const collectValidationIssues = <T>(
  narrow: NarrowOf<T>,
  target: unknown,
  path: ValidationPath = []
): ValidationIssue[] => {
  if (narrow(target)) return [];

  const validator = validators.get(narrow as NarrowOf<unknown>);

  if (validator) {
    const issues = validator(target, path);

    return issues.length > 0
      ? issues
      : [createValidationIssue(path, "invalid_value", "matching predicate", target)];
  }

  return [
    createValidationIssue(path, "custom", "matching predicate", target),
  ];
};

export const validate = <T>(
  narrow: NarrowOf<T>,
  target: unknown
): ValidationResult<T> => {
  if (narrow(target)) {
    return { success: true, value: target, errors: [] };
  }

  return {
    success: false,
    errors: collectValidationIssues(narrow, target),
  };
};
