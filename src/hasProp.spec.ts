import { user } from "./testExamples";
import { hasProp } from "./hasProp";

describe("hasProp", () => {
  it("correctly infers flat object", () => {
    expect(hasProp("firstName")(user)).toBeTruthy();
    expect(hasProp("lastName")(user)).toBeTruthy();
    expect(hasProp("age")(user)).toBeTruthy();
  });
  it("fails for wrong property", () => {
    expect(hasProp("wrongProperty")(user)).toBeFalsy();
  });
});
