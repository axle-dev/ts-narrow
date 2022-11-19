import { isString } from "./isString.js";

describe("isString", () => {
  it("is truthy", () => {
    expect(isString("asd")).toBeTruthy();
    expect(isString("")).toBeTruthy();
    expect(isString(String())).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isString(1)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
  });
});
