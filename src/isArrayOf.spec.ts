import { arrayWithDifferentTypes, posts } from "./testExamples";
import { isArrayOf } from "./isArrayOf";
import { isNumber } from "./isNumber";
import { isObject } from "./isObject";

describe("isArray", () => {
  it("correctly infers that all elements of an array has correct type", () => {
    expect(isArrayOf(isObject)(posts)).toBeTruthy();
  });
  it("fails if any of elements didn't match", () => {
    expect(isArrayOf(isNumber)(arrayWithDifferentTypes)).toBeFalsy();
  });
});
