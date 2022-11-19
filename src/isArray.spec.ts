import { isArray } from "./isArray.js";

describe("isArray", () => {
  it("is truthy", () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray(new Array())).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray("asd")).toBeFalsy();
    expect(isArray(Array)).toBeFalsy();
    expect(isArray(Function)).toBeFalsy();
  });
});
