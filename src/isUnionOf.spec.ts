import { isNumber } from "./isNumber.js";
import { isUnionOf } from "./isUnionOf.js";
import { isString } from "./isString.js";
import { hasPropOf } from "./hasPropOf.js";

describe("isUnionOf", () => {
  it("is truthy", () => {
    expect(
      isUnionOf(
        hasPropOf("a", isString),
        hasPropOf("b", isNumber)
      )({ a: "123", b: 456 })
    ).toBeTruthy();
  });
  it("is falsy", () => {
    expect(
      isUnionOf(
        hasPropOf("a", isString),
        hasPropOf("b", isString)
      )({ a: "123", b: 456 })
    ).toBeFalsy();
  });
});
