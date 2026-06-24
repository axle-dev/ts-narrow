import { createPredicateValidator, withValidation } from "./validation.js";

const narrow = (target: unknown): target is number =>
  typeof target === "number";

export const isNumber = withValidation(
  narrow,
  createPredicateValidator(narrow, "number")
);
