import { isOneStringLiteralOf } from "./isOneStringLiteralOf.js";

describe("isOneStringLiteralOf", () => {
  it("passes if target is one of", () => {
    expect(isOneStringLiteralOf("a", "c")("a")).toBeTruthy();
    expect(isOneStringLiteralOf("b")("b")).toBeTruthy();
    expect(isOneStringLiteralOf("")("")).toBeTruthy();
  });
  it("fails if target is not one of", () => {
    expect(isOneStringLiteralOf("a", "c")("d")).toBeFalsy();
    expect(isOneStringLiteralOf("b")("x")).toBeFalsy();
    expect(isOneStringLiteralOf("")("qwe")).toBeFalsy();
  });
});
