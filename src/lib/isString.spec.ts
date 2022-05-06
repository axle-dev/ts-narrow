import { isString } from "./isString";

describe("isString", () => {
  it("infers an object", () => {
    expect(isString("asd")).toBeTruthy();
    expect(isString("")).toBeTruthy();
    expect(isString(String())).toBeTruthy();
  });
  it("fails for not object", () => {
    expect(isString(1)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
  });
});
