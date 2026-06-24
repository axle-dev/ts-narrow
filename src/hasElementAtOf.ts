import { NarrowOf } from "./types.js";
import { hasElementAt } from "./hasElementAt.js";
import {
  collectValidationIssues,
  withValidation,
} from "./validation.js";

export const hasElementAtOf =
  <T, Pos extends number, Obj extends { [K in Pos]: T } = { [K in Pos]: T }>(
    at: Pos,
    f: NarrowOf<T>
  ) => {
    const narrow = (target: unknown): target is Obj =>
      hasElementAt(at)(target) && f(target[at]);

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      const elementNarrow = hasElementAt(at);

      if (!elementNarrow(target)) {
        return collectValidationIssues(elementNarrow, target, path);
      }

      return collectValidationIssues(f, target[at], [...path, at]);
    });
  };
