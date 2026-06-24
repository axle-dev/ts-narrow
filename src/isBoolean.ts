import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = (target: unknown): target is boolean =>
  typeof target === "boolean";

export const isBoolean = withValidation(
  narrow,
  createPredicateValidator(narrow, "boolean")
);
