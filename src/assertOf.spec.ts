import { assertOf } from "./assertOf.js";
import { isString } from "./isString.js";
import { isNumber } from "./isNumber.js";
import { isObjectOf } from "./isObjectOf.js";
import { hasElementsOf } from "./hasElementsOf.js";

const a: unknown = "123";
const b: unknown = {
  num: 10,
  str: "qwezxc",
  arr: [5, "3"],
};

describe("assertOf", () => {
  it("not throws", () => {
    expect(() => assertOf(isString)(a)).not.toThrow();
    expect(() =>
      assertOf(
        isObjectOf({
          num: isNumber,
          str: isString,
          arr: hasElementsOf([isNumber, isString]),
        })
      )(b)
    ).not.toThrow();
  });
  it("throws", () => {
    expect(() => assertOf(isNumber)(a)).toThrow();
  });
});
