# ts-narrow
### Typescript type predicates with no dependencies.

- [Library basics](#ts-narrow)

This library is not supposed to be a schema validator, or a object validator,
so it doesn't throw any errors and will always return a boolean result. You should use
this library as a quick helper to narrow from more generic types, to something that you can work with.

For example:

![image](https://user-images.githubusercontent.com/7359906/187603278-ae5a146d-291d-4f9f-a8d6-18d25d21da8c.png)

Here you're receiving an `unknown` object, which you can't work with on typescript.
By the time the program evaluates the 'if' condition as true, constant `a` type will be narrow, meaning that now you can be sure that constant `a` is a `object` and has a prop `b` of type `number`.  
This program will enter inside 'if' condition only if constant `a` matches exactly this condition, _and your IDE will respect these types_.

Under the hood, it uses advanced user defined types to bring the best of two worlds: a fast runtime check within a amazing developer experience.
