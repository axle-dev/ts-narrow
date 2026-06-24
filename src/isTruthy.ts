import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = <Target>(
  target: Target
): target is Exclude<Target, null | undefined> =>
  target !== null && target !== undefined;

export const isTruthy = withValidation(
  narrow,
  createPredicateValidator(narrow, "not null or undefined", "required")
);
