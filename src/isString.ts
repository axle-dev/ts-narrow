import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = (target: unknown): target is string =>
  typeof target === "string";

export const isString = withValidation(
  narrow,
  createPredicateValidator(narrow, "string")
);
