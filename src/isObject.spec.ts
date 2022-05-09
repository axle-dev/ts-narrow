import { user } from "../testExamples";
import { isObject } from "./isObject";

describe("isObject", () => {
  it("infers an object", () => {
    expect(isObject(user)).toBeTruthy();
    expect(isObject([])).toBeTruthy();
    expect(isObject(null)).toBeTruthy();
  });
  it("fails for not object", () => {
    expect(isObject(1)).toBeFalsy();
    expect(isObject("asd")).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
  });
});
