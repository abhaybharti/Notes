### What TypeScript does: `static checking`

When you run your code, typescript is a development tool, when you run your code. Your code gets converted or transpiled to JavaScript.

### typescript playground

https://www.typescriptlang.org/play

### TypeScript Official doc

https://www.typescriptlang.org/

### install typescript

#### global installation

npm install -g typescript

#### local dev dependency installation

npm install typescript --save-dev

### tsc --init

To generate `tsconfig.json` file in your project. tsconfig.json file is for typescript configuration.

You can download the tsconfig.json from https://www.typescriptlang.org/play#code/C4TwDgpgBACg9gSwHbCgXigbwLACgpQAeAXFAM7ABOyA5gNx4EikXVL14C+DueA9HygBRQgEMAxsAA2IKMAAW0MqIC20UWTmKoEUZSkIIlHWJVgpEPADMArkkkI4SKGDbAAwnDiUAJgAowYFJ4ZGAASixGKHEnMjgLADopOBo-ACIAFW0Y7x9kUWAIAHJNQigAN1EpG2gETTSoAGoXYATCMJ4CGKQ4xOTUzOyvX3zCkqhZSura+qaWhJAOrjw8V1DPXL9MIlI0gEYABgO0gBoJ3cPjqE4OoA

#### run TypeScript code

`npx tsc`

run above command in console, it builds .js file from \*.ts file.

#### run TypeScript code in watch mode

`npx tsc --watch`

this helps your to build the typescript

#### tsc -v

shows typescript version

tsc filename.ts -- recompile file as .js file

### Types:

- 1. number
- 2. string
- 3. boolean
- 4. array
- 5. `any` - it turn off the type checking. You usually want to avoid this, though, because `any` is not
     type-checked. Use the compiler flag `noImplicitAny` (this flag is in TypeScript) to flag any implicit `any` as an error.
- 6. function
- 7. Object
- 8. Union - A union type is a type formed from two or more other types, representing values that may be any one of
     those types.
- 9. `type` - We have been using object types and union types by writing them directly in type annotations. This is
     convenient, but is is common to want to use the same type more than once and refer to it by single name.
     A type alias is exactly that - a name for any type.
- 10. `Interfaces` - An interface declaration is another way to name an object type.
      Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

Extending an interface

````
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear = getBear();
bear.name;
bear.honey;```

- 11. Literal
- 12. Null
- 13. Undefined
- 14. Enums
- 15. BigInt
- 16. symbol
- 17. Void
- 18. Tuples
- 19. `never` - The never type represents values which are never observed. In a return type, this means that the
      function throws an exception or terminates execution of the program. never also appears when TypeScript determines there is nothing left in union.
- 20. unknown
````

### How to configure TypeScript compiler options in your project

- create a folder
- run `tsc --init`, this will create `tsconfig.json` file in your project
- run `npm init -y` to create package.json file in your project
- create `src` folder & inside it create `index.ts` file
- create `dist` folder & \*.js file will be stored here
- create `*.html` file & link .js file `<script src="./dist/index.js"></script>`
- run `npx tsc --watch` or `npx tsc` to build your project
- write code in `index.ts` file
- open `index.html` file with live server & check your code output

### What is the usage of interfaces?
