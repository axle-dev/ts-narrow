import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = <Target extends unknown>(array: unknown): array is Target[] =>
  array instanceof Array;

export const isArray = withValidation(
  narrow,
  createPredicateValidator(narrow, "array")
);
