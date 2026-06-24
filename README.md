# ts-narrow

TypeScript type predicates with no runtime dependencies.

`ts-narrow` is a small collection of composable predicate functions for turning `unknown` or broad values into useful TypeScript types. It is designed for guards at API boundaries, event payloads, optional data, and any place where TypeScript needs runtime evidence before it can safely narrow a value.

The core API returns booleans and narrows types through user-defined type predicates. It is intentionally lighter than a schema validator: predicates do not collect issues, transform data, or produce parse results. If a check returns `true`, TypeScript sees the narrowed type inside that branch.

```ts
import { hasPropOf, isNumber, isObjectOf, isString } from "ts-narrow";

const isUser = isObjectOf({
  id: isNumber,
  name: isString,
  profile: hasPropOf("avatarUrl", isString),
});

const value: unknown = await response.json();

if (isUser(value)) {
  value.id;
  value.name;
  value.profile.avatarUrl;
}
```

## Install

```sh
npm install ts-narrow
```

## Concepts

Every narrowing function follows the same shape:

```ts
type NarrowOf<T> = (element: unknown) => element is T;
```

Factories such as `isArrayOf`, `isObjectOf`, `hasPropOf`, `isOneOf`, and `isUnionOf` accept other narrowing functions, so small checks can be composed into larger checks.

`isObject` follows JavaScript's `typeof target === "object"` behavior, so it returns `true` for `null`. Use `hasProp`, `hasPropOf`, `isObjectOf`, or `isRecordOf` when you need object-like data that can actually be inspected.

## API

### `assert(condition, error?)`

Throws when `condition` is falsy. The optional `error` can be a string or an `Error`.

```ts
assert(userId, "Expected user id");
```

### `assertOf(target, narrow, error?)`

Throws when `narrow(target)` is false and narrows `target` after the call.

```ts
assertOf(value, isString);
value.toUpperCase();
```

### `ensure(target, error?)`

Returns `target` when it is not `null` or `undefined`; otherwise throws.

```ts
const user = ensure(maybeUser, "User is required");
```

### `ensureOf(narrow)(target, error?)`

Returns `target` when it matches `narrow`; otherwise throws. The returned value is narrowed to the predicate type.

```ts
const getString = ensureOf(isString);
const name = getString(value, "Expected a string");
```

### `hasElementAt(index)`

Checks that the target is an array and contains an element at `index`.

```ts
if (hasElementAt(0)(value)) {
  value[0];
}
```

### `hasElementAtOf(index, narrow)`

Checks that the target is an array, contains an element at `index`, and that the element matches `narrow`.

```ts
const hasStringFirstItem = hasElementAtOf(0, isString);
```

### `hasElementsOf(elements)`

Checks that the target is an array with exactly the same length as `elements`, and that each value matches the predicate at the same index.

```ts
const isPoint = hasElementsOf([isNumber, isNumber]);
```

### `hasProp(propName)`

Checks that the target is a non-null object and has `propName`.

```ts
const hasId = hasProp("id");
```

### `hasPropOf(propName, narrow)`

Checks that the target is a non-null object, has `propName`, and that the property value matches `narrow`.

```ts
const hasNumericId = hasPropOf("id", isNumber);
```

### `isArray(target)`

Checks that the target is an array.

```ts
if (isArray(value)) {
  value.length;
}
```

### `isArrayOf(narrow)`

Checks that the target is an array and every element matches `narrow`.

```ts
const isStringArray = isArrayOf(isString);
```

### `isBoolean(target)`

Checks that the target is a boolean.

```ts
isBoolean(true);
```

### `isEnum(target)`

Checks that the target looks like a TypeScript enum object.

```ts
enum Status {
  Open = "open",
  Closed = "closed",
}

isEnum(Status);
```

### `isEnumOf(enumToCompare)`

Checks that the target is the same enum object shape as `enumToCompare`.

```ts
const isStatusEnum = isEnumOf(Status);
```

### `isEnumValueOf(enumObject)`

Checks that the target is one of the enum object's values.

```ts
const isStatus = isEnumValueOf(Status);
```

### `isIndexOf(record)`

Checks that the target is a key of `record`.

```ts
const isKnownKey = isIndexOf({ id: true, name: true });
```

### `isInstanceOf(Class)`

Checks that the target is an instance of a class.

```ts
const isDate = isInstanceOf(Date);
```

### `isLiteral(literal)`

Checks that the target is exactly equal to `literal`.

```ts
const isReady = isLiteral("ready");
```

### `isNumber(target)`

Checks that the target is a number.

```ts
isNumber(123);
```

### `isObject(target)`

Checks `typeof target === "object"`. This matches JavaScript behavior, so arrays and `null` return `true`.

```ts
isObject({});
isObject([]);
isObject(null);
```

### `isObjectOf(shape)`

Checks that the target matches every predicate in `shape`. Extra properties are allowed.

```ts
const isUser = isObjectOf({
  id: isNumber,
  name: isString,
});
```

### `isOneOf(...narrowFunctions)`

Checks that the target matches at least one predicate. The inferred type is a union of the predicate types.

```ts
const isStringOrNumber = isOneOf(isString, isNumber);
```

### `isOneStringLiteralOf(...values)`

Checks that the target is one of the provided strings.

```ts
const isRole = isOneStringLiteralOf("admin", "member", "guest");
```

### `isRecordOf(narrow)`

Checks that the target is a non-null object and every enumerable value matches `narrow`.

```ts
const isStringRecord = isRecordOf(isString);
```

### `isString(target)`

Checks that the target is a string.

```ts
isString("hello");
```

### `isTruthy(target)`

Checks that the target is not `null` and not `undefined`.

```ts
if (isTruthy(value)) {
  value;
}
```

### `isUnionOf(...narrowFunctions)`

Checks that the target matches every predicate. The inferred type is an intersection of the predicate types.

```ts
const hasNameAndAge = isUnionOf(
  hasPropOf("name", isString),
  hasPropOf("age", isNumber)
);
```

### `InferNarrow<T>`

Extracts the narrowed type from a `NarrowOf<T>` function.

```ts
type User = InferNarrow<typeof isUser>;
```

### `NarrowOf<T>`

The base predicate type used by the library.

```ts
const isNonEmptyString: NarrowOf<string> = (value): value is string =>
  isString(value) && value.length > 0;
```

### `validate(narrow, target)`

Runs a predicate and returns a validation result instead of a bare boolean. Successful results include the original value narrowed to the predicate type. Failed results include every issue that `ts-narrow` can collect from library-created predicates.

```ts
const isUser = isObjectOf({
  id: isNumber,
  name: isString,
});

const result = validate(isUser, { id: "1" });

if (!result.success) {
  result.errors;
  // [
  //   {
  //     path: ["id"],
  //     code: "invalid_type",
  //     expected: "number",
  //     received: "string",
  //     message: "Expected id to be number, received string."
  //   },
  //   {
  //     path: ["name"],
  //     code: "missing_property",
  //     expected: "present property",
  //     received: "undefined",
  //     message: "Expected name to be present."
  //   }
  // ]
}
```

`validate` keeps the existing predicate-first design intact. The predicates still return booleans, and `validate` reads optional diagnostics metadata attached to predicates created by this library.

```ts
type ValidationIssue = {
  path: Array<string | number | symbol>;
  code: string;
  expected: string;
  received: string;
  message: string;
};

type ValidationResult<T> =
  | { success: true; value: T; errors: [] }
  | { success: false; errors: ValidationIssue[] };
```

Custom predicates still work with `validate`, but they cannot explain why they failed unless they were composed from `ts-narrow` predicates. In that case, `validate` returns a generic `custom` issue.
