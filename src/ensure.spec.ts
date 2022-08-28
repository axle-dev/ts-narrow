import { ensure } from "./ensure.js";

describe("ensure", () => {
  it("returns target if it exists", () => {
    expect(() => ensure(0)).not.toThrow();
    expect(() => ensure("")).not.toThrow();
    expect(() => ensure({})).not.toThrow();
    expect(() => ensure([])).not.toThrow();
    expect(() => ensure(false)).not.toThrow();
  });
  it("throw an error if not", () => {
    expect(() => ensure(null)).toThrow();
    expect(() => ensure(undefined)).toThrow();
  });
});
