import { isArray } from "./isArray.js";

describe("isArray", () => {
  it("infers an array", () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray(new Array())).toBeTruthy();
  });
  it("fails for not array", () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray(1)).toBeFalsy();
    expect(isArray("asd")).toBeFalsy();
    expect(isArray(Array)).toBeFalsy();
    expect(isArray(Function)).toBeFalsy();
  });
});
