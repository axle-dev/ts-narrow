import { assertOf } from "./assertOf.js";
import { isLiteral } from "./isLiteral.js";
import { isObjectOf } from "./isObjectOf.js";

const a: unknown = { 123: 5, 456: "123" };

describe("assertOf", () => {
  it("is truthy", () => {
    expect(() =>
      assertOf(a, isObjectOf({ 123: isLiteral(5), 456: isLiteral("123") }))
    ).not.toThrow();
  });
  it("is falsy", () => {
    expect(() =>
      assertOf(a, isObjectOf({ 123: isLiteral(5), 456: isLiteral("124") }))
    ).toThrow();
  });
});
