import { isNumber } from "isNumber";
import { hasPropOf } from "./hasPropOf";
import { isString } from "./isString";

describe("hasProp", () => {
  it("correctly infers flat object", () => {
    const user: unknown = {
      firstName: "Gabriel",
      lastName: "Rocha de Oliveira",
      age: 10,
    };

    expect(hasPropOf("firstName", isString)(user)).toBeTruthy();
    expect(hasPropOf("lastName", isString)(user)).toBeTruthy();
    expect(hasPropOf("age", isNumber)(user)).toBeTruthy();
  });
  it("can be composed to infers nested object", () => {});
});
