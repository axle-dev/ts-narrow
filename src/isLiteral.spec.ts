import { isLiteral } from "./isLiteral.js";

describe("isLiteral", () => {
  it("is truthy", () => {
    expect(isLiteral("1")("1")).toBeTruthy();
    expect(isLiteral(1)(1)).toBeTruthy();
    expect(isLiteral(true)(true)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isLiteral(1)(2)).toBeFalsy();
    expect(isLiteral(1)("2")).toBeFalsy();
    expect(isLiteral("1")("2")).toBeFalsy();
    expect(isLiteral(true)(false)).toBeFalsy();
    expect(isLiteral(0)(false)).toBeFalsy();
  });
});
