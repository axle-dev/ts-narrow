# ts-narrow
### Typescript type predicates with no dependencies.

- [Library basics](#ts-narrow)

This library is not supposed to be a schema validator, or a object validator,
that's the reason it doesn't support custom messages, for example. You should use
this library as a quick helper to narrow from more generic types, to something that you can work with.

For example:

![image](https://user-images.githubusercontent.com/7359906/187603278-ae5a146d-291d-4f9f-a8d6-18d25d21da8c.png)

Here you're receivind a `unknown` object, which you can't work with on typescript.
By narrowing it, you'll be able to find that `a` is a `object` and has a prop `b` of type `number`.
This program will enter inside if condition only if constant `a` matches exactly this condition, and your IDE will respect the types.  

It uses advanced user defined types under the hood and it brings the best of two worlds: a fast runtime check within a amazing developer experience.
