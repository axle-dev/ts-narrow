import { isNumber } from "./isNumber";
import { hasPropOf } from "./hasPropOf";
import { isString } from "./isString";
import { user } from "../testExamples";

describe("hasPropOf", () => {
  it("correctly infers flat object", () => {
    expect(hasPropOf("firstName", isString)(user)).toBeTruthy();
    expect(hasPropOf("lastName", isString)(user)).toBeTruthy();
    expect(hasPropOf("age", isNumber)(user)).toBeTruthy();
  });
  it("can be composed to infers nested object", () => {
    expect(hasPropOf("picture", hasPropOf("url", isString))(user)).toBeTruthy();
  });
  it("fails for wrong property", () => {
    expect(hasPropOf("wrongProperty", isString)(user)).toBeFalsy();
  });
  it("fails for right property but wrong type", () => {
    expect(hasPropOf("firstName", isNumber)(user)).toBeFalsy();
  });
});
