import { isStringLiteral } from "./isStringLiteral.js";

describe("isString", () => {
  it("infers an object", () => {
    expect(isStringLiteral("asd")).toBeTruthy();
    expect(isStringLiteral("")).toBeTruthy();
  });
});
