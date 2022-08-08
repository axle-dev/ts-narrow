import { nestedArrays, posts } from "./testExamples.js";
import { hasElementAtOf } from "./hasElementAtOf.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";
import { isString } from "./isString.js";

describe("hasElementAtOfOf", () => {
  it("correctly verify existant index", () => {
    expect(hasElementAtOf(0, isObject)(posts)).toBeTruthy();
  });
  it("can be nested to verify nested indexes", () => {
    expect(
      hasElementAtOf(
        2,
        hasElementAtOf(2, hasElementAtOf(0, isString))
      )(nestedArrays)
    ).toBeTruthy();
  });
  it("fails for undefined index", () => {
    expect(hasElementAtOf(3, isString)(nestedArrays)).toBeFalsy();
  });
  it("fails for existant index and wrong type", () => {
    expect(hasElementAtOf(2, isString)(isNumber)).toBeFalsy();
  });
});
