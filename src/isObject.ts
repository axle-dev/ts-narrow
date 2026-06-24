import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = <Target extends object>(target: unknown): target is Target =>
  typeof target === "object";

export const isObject = withValidation(
  narrow,
  createPredicateValidator(narrow, "object")
);
