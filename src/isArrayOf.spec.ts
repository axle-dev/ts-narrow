import { arrayWithDifferentTypes, posts } from "./testExamples.js";
import { isArrayOf } from "./isArrayOf.js";
import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";

describe("isArray", () => {
  it("correctly infers that all elements of an array has correct type", () => {
    expect(isArrayOf(isObject)(posts)).toBeTruthy();
  });
  it("fails if any of elements didn't match", () => {
    expect(isArrayOf(isNumber)(arrayWithDifferentTypes)).toBeFalsy();
  });
});
