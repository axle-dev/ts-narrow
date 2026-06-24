import {
  hasElementsOf,
  hasPropOf,
  isArrayOf,
  isBoolean,
  isNumber,
  isObjectOf,
  isOneOf,
  isRecordOf,
  isString,
  isUnionOf,
  validate,
} from "./index.js";

describe("validate", () => {
  it("returns a successful result with the original narrowed value", () => {
    const isUser = isObjectOf({
      id: isNumber,
      name: isString,
    });

    const value: unknown = { id: 1, name: "Gabriel" };
    const result = validate(isUser, value);

    expect(result).toEqual({
      success: true,
      value,
      errors: [],
    });
  });

  it("collects every failing field in an object shape", () => {
    const isUser = isObjectOf({
      id: isNumber,
      name: isString,
      active: isBoolean,
    });

    const result = validate(isUser, {
      id: "1",
      active: "yes",
    });

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: ["id"],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
      {
        path: ["name"],
        code: "missing_property",
        expected: "present property",
        received: "undefined",
      },
      {
        path: ["active"],
        code: "invalid_type",
        expected: "boolean",
        received: "string",
      },
    ]);
  });

  it("keeps nested object paths", () => {
    const isProfile = isObjectOf({
      avatarUrl: isString,
      age: isNumber,
    });

    const isUser = isObjectOf({
      id: isNumber,
      profile: isProfile,
    });

    const result = validate(isUser, {
      id: 1,
      profile: {
        avatarUrl: null,
        age: "37",
      },
    });

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: ["profile", "avatarUrl"],
        code: "invalid_type",
        expected: "string",
        received: "null",
      },
      {
        path: ["profile", "age"],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
    ]);
  });

  it("collects errors from arrays of object shapes", () => {
    const isPost = isObjectOf({
      id: isNumber,
      title: isString,
    });

    const result = validate(isArrayOf(isPost), [
      { id: 1, title: "Hello" },
      { id: "2" },
      { id: 3, title: false },
    ]);

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: [1, "id"],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
      {
        path: [1, "title"],
        code: "missing_property",
        expected: "present property",
        received: "undefined",
      },
      {
        path: [2, "title"],
        code: "invalid_type",
        expected: "string",
        received: "boolean",
      },
    ]);
  });

  it("reports tuple length and per-index errors", () => {
    const isTuple = hasElementsOf([isString, isNumber, isBoolean]);

    const result = validate(isTuple, ["ok", "wrong"]);

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: [],
        code: "invalid_length",
        expected: "array length 3",
        received: "array",
      },
      {
        path: [1],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
      {
        path: [2],
        code: "invalid_type",
        expected: "boolean",
        received: "undefined",
      },
    ]);
  });

  it("reports invalid record values by property path", () => {
    const result = validate(isRecordOf(isNumber), {
      port: 3000,
      host: "localhost",
    });

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: ["host"],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
    ]);
  });

  it("uses a generic union error when no option matches", () => {
    const result = validate(isOneOf(isString, isNumber), false);

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: [],
        code: "invalid_union",
        expected: "one matching predicate",
        received: "boolean",
      },
    ]);
  });

  it("collects failing predicates from intersections", () => {
    const hasIdAndName = isUnionOf(
      hasPropOf("id", isNumber),
      hasPropOf("name", isString)
    );

    const result = validate(hasIdAndName, {
      id: "not-a-number",
    });

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: ["id"],
        code: "invalid_type",
        expected: "number",
        received: "string",
      },
      {
        path: ["name"],
        code: "missing_property",
        expected: "present property",
        received: "undefined",
      },
    ]);
  });

  it("falls back to a generic issue for custom predicates without metadata", () => {
    const isEvenNumber = (target: unknown): target is number =>
      typeof target === "number" && target % 2 === 0;

    const result = validate(isEvenNumber, 3);

    expect(result.success).toBe(false);
    expect(result.errors).toMatchObject([
      {
        path: [],
        code: "custom",
        expected: "matching predicate",
        received: "number",
      },
    ]);
  });
});
