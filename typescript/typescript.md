### What TypeScript does: `static checking`

When you run your code, typescript is a development tool, when you run your code. Your code gets converted or transpiled to JavaScript.

### install typescript

#### global installation

npm install -g typescript

#### local dev dependency installation

npm install typescript --save-dev

#### npx tsc

this helps your to build the typescript

#### tsc -v

shows typescript version

tsc filename.ts -- recompile file as .js file

### typescript playground

https://www.typescriptlang.org/play

### Types:

- 1. Number
- 2. String
- 3. Boolean
- 4. Array
- 5. any - it turn off the type checking. You usually want to avoid this, though, because `any` is not type-checked. Use the compiler flag `noImplicitAny` (this flag is in TypeScript) to flag any implicit `any` as an error.
- 6. function
- 7. Object
- 8. Union
- 9. Type
- 10. Interfaces
- 11. Literal
- 12. Null
- 13. Undefined
- 14. Enums
- 15. BigInt
- 16. symbol
- 17. Void
- 18. Tuples
- 19. never - The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program. never also appears when TypeScript determines there is nothing left in union.
- 20. unknown
