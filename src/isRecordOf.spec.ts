import { isNumber } from "./isNumber.js";
import { isObject } from "./isObject.js";
import { isOneOf } from "./isOneOf.js";
import { isRecordOf } from "./isRecordOf.js";
import { isString } from "./isString.js";

const obj: unknown = {
  a: "asd",
  b: "zxc",
};

const obj2: unknown = {
  a: 15,
  b: "32",
};

describe("isRecordOf", () => {
  it("is truthy", () => {
    expect(isRecordOf(isString)(obj)).toBeTruthy();
    expect(isRecordOf(isOneOf(isString, isNumber))(obj2)).toBeTruthy();
  });
  it("is falsy", () => {
    expect(isRecordOf(isNumber)(obj)).toBeFalsy();
    expect(isRecordOf(isOneOf(isString, isObject))(obj2)).toBeFalsy();
  });
});
