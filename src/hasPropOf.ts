import { NarrowOf } from "./types.js";
import { hasProp } from "./hasProp.js";
import {
  collectValidationIssues,
  withValidation,
} from "./validation.js";

export const hasPropOf =
  <PropName extends string | symbol | number, Target>(
    propName: PropName,
    f: NarrowOf<Target>
  ) => {
    const narrow = (target: unknown): target is { [K in PropName]: Target } =>
      hasProp(propName)(target) && f(target[propName]);

    return withValidation(narrow, (target, path) => {
      if (narrow(target)) return [];

      const propNarrow = hasProp(propName);

      if (!propNarrow(target)) {
        return collectValidationIssues(propNarrow, target, path);
      }

      return collectValidationIssues(f, target[propName], [...path, propName]);
    });
  };
