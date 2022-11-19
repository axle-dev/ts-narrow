import { isTruthy } from "./isTruthy.js";

describe("isTruthy", () => {
  it("returns target if it exists", () => {
    expect(() => isTruthy(0)).not.toThrow();
    expect(() => isTruthy("")).not.toThrow();
    expect(() => isTruthy({})).not.toThrow();
    expect(() => isTruthy([])).not.toThrow();
    expect(() => isTruthy(false)).not.toThrow();
  });
  it("throw an error if not", () => {
    expect(() => isTruthy(null)).toThrow();
    expect(() => isTruthy(undefined)).toThrow();
  });
});
