import { isOneStringLiteralOf } from "./isOneStringLiteralOf.js";

describe("isOneStringLiteralOf", () => {
  it("is truthy", () => {
    expect(isOneStringLiteralOf("a", "c")("a")).toBeTruthy();
    expect(isOneStringLiteralOf("b")("b")).toBeTruthy();
    expect(isOneStringLiteralOf("")("")).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isOneStringLiteralOf("a", "c")("d")).toBeFalsy();
    expect(isOneStringLiteralOf("b")("x")).toBeFalsy();
    expect(isOneStringLiteralOf("")("qwe")).toBeFalsy();
  });
});
