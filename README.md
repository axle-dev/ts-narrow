# ts-narrow
### Typescript type predicates with no dependencies.

- [Library basics](#ts-narrow)
- <a href="#library-methods">Library methods</a>
  - [isString](#isString)

This library is not supposed to be a schema validator, or a object validator,
so it doesn't throw any errors and will always return a boolean result. You should use
this library as a quick helper to narrow from more generic types, to something that you can work with.

For example:

![image](https://user-images.githubusercontent.com/7359906/187603278-ae5a146d-291d-4f9f-a8d6-18d25d21da8c.png)

Here you're receiving an `unknown` object, which you can't work with on typescript.
By the time the program evaluates the 'if' condition as true, constant `a` type will be narrow, meaning that now you can be sure that constant `a` is a `object` and has a prop `b` of type `number`.  
This program will enter inside 'if' condition only if constant `a` matches exactly this condition, _and your IDE will respect these types_.

Under the hood, it uses advanced user defined types to bring the best of two worlds: a fast runtime check within a amazing developer experience.

# Library methods

### hasElementAt
Checks if target is an array and it has an element on a specific position.

### hasElementAtOf
Checks if target is an array and it has an element on a specific position.
Can be composed to check the type of the element.

### hasProp
Checks if target is an object and it has a specific property.

### hasPropOf
Checks if target is an object and it has a specific property.
Can be composed to check the type of the property.

### isArray
Checks if target is an array.

### isArrayOf
Checks if target is an array.
Can be composed to check the type of all elements.

### isEnum
Checks if target is a typescript enum.

### isEnumOf
Checks if target is a specific enum.

### isEnumValueOf
Checks if target is a value of a specific enum.

### isNumber
Checks if target is a number.

### isObject
Checks if target is an object.
Please notice that `null` is a valid javascript object.

### isOneOf
Checks if target is one of passed arguments.

### isUnionOf
Checks if target is all of passed arguments.

### isString
Checks if target is a string.

### isRecordOf
Checks if target is an object and it has all its properties with the same passed type.

### ensure
Throws if target is `null` or `undefined`.
Can receive an optional message or anything that extends Error to customize the message to be throw.

### isLiteral
Checks if target is a literal with specific value.

### isObjectOf
Checks if target is a object with specific shape.
Can be composed to check the type of each property individually by using a `NarrowFunc`.
It doesn't care about extra properties.

### isInstanceOf
Checks if target is an instance of a class.

### assert
Throws if passed condition is not true.
Can receive a optional message or anything that extends Error to customize the message to be throw.

### assertOf
Throws if passed condition is not true.
It also narrows argument to have matched condition type.
Can receive a optional message or anything that extends Error to customize the message to be throw.

<!-- ### hasElementsOf -->

### isOneStringLiteralOf
Checks if string is one of strings passed in a list.

### isBoolean
Checks if target is a boolean.

### ensureOf
Throws if target returns false from a `NarrowFunc`.

### isTruthy
Check if target is not `null`, `undefined`.
