import { NarrowFunc } from "./types";

export const ensureOf =
  <Target>(f: NarrowFunc<Target>) =>
  (
    target: unknown,
    message: string = "This value was promised to be there."
  ): asserts target is Target => {
    const functionResult = f(target);
    if (target === undefined || target === null || !functionResult) {
      throw new Error(message);
    }
  };
