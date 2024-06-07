## Table of Contents

- [ JavaScript](#[-javascript)
  - [ How JavaScript works](#[-how-javascript-works)
    - [ Execution Context : Component where JS is executed. It has](#[-execution-context-:-component-where-js-is-executed.-it-has)
    - [- [ Memory or variable Env -](#[--[-memory-or-variable-env--)
    - [- [ Code Env or Thread of Execution -](#[--[-code-env-or-thread-of-execution--)
  - [ Variables](#[-variables)
  - [ Things to Keep in mind when naming a variable](#[-things-to-keep-in-mind-when-naming-a-variable)
  - [ variable scope->Understanding](#[-variable-scope->understanding)
  - [ Data Conversion](#[-data-conversion)
  - [ Data Types](#[-data-types)
  - [ If](#[-if)
  - [ Multiple ways to write if conditions](#[-multiple-ways-to-write-if-conditions)
  - [ Loops in JavaScript](#[-loops-in-javascript)
  - [ Different types of Loops supported in JavaScript](#[-different-types-of-loops-supported-in-javascript)
  - [ Using For Loop](#[-using-for-loop)
  - [ Output:](#[-output:)
  - [ Using ForEach](#[-using-foreach)
  - [ Output:](#[-output:)
  - [ Using ForOff](#[-using-foroff)
  - [ Output:](#[-output:)
  - [ Using while loop](#[-using-while-loop)
  - [ Output:](#[-output:)
  - [ Using Do while loop](#[-using-do-while-loop)
  - [ Output:](#[-output:)
  - [ Using Map](#[-using-map)
  - [ Output:](#[-output:)
  - [ What is console.log](#[-what-is-console.log)
  - [ JavaScript datatype](#[-javascript-datatype)
  - [ Use proper variable names](#[-use-proper-variable-names)
  - [ JavaScript Good Practice](#[-javascript-good-practice)
    - [ What is block scope and functional scope](#[-what-is-block-scope-and-functional-scope)
    - [ Why should not use `var`](#[-why-should-not-use-`var`)
    - [ What is undefined in JavaScript](#[-what-is-undefined-in-javascript)
  - [ set](#[-set)
  - [ null](#[-null)
  - [ map](#[-map)
  - [ filter](#[-filter)
  - [ loops](#[-loops)
  - [ String](#[-string)
  - [ BigInt](#[-bigint)
  - [ Object](#[-object)
  - [ Reflect](#[-reflect)
  - [ scopes](#[-scopes)
  - [ Symbol](#[-symbol)
  - [ Boolean](#[-boolean)
  - [ currying](#[-currying)
  - [ closures](#[-closures)
  - [ Number](#[-number)
  - [ variables](#[-variables)
  - [ promise & promise API and CallBack adn fetch](#[-promise-&-promise-api-and-callback-adn-fetch)
  - [ call stack](#[-call-stack)
  - [ web APIs](#[-web-apis)
  - [ undefined](#[-undefined)
  - [ deep copy](#[-deep-copy)
  - [ data types](#[-data-types)
  - [ event loop](#[-event-loop)
  - [ statements](#[-statements)
  - [ asynchrony](#[-asynchrony)
  - [ async - await](#[-async---await)
  - [ conditionals](#[-conditionals)
  - [ map method](#[-map-method)
  - [ shallow copy](#[-shallow-copy)
  - [ destructuring](#[-destructuring)
  - [ Object Destructuring](#[-object-destructuring)
  - [ Array Destructuring](#[-array-destructuring)
  - [ Rest Operator](#[-rest-operator)
  - [ Spread Operator](#[-spread-operator)
  - [ pure function](#[-pure-function)
  - [ lexical scoping](#[-lexical-scoping)
  - [ arrow function](#[-arrow-function)
  - [ array functions](#[-array-functions)
  - [ Break the array](#[-break-the-array)
  - [ Sort String Array](#[-sort-string-array)
  - [ Sort Number Array](#[-sort-number-array)
  - [ Check weather passed String is numeric or not](#[-check-weather-passed-string-is-numeric-or-not)
  - [ string methods](#[-string-methods)
  - [ named imports](#[-named-imports)
  - [ default imports](#[-default-imports)
  - [ reduce method](#[-reduce-method)
  - [ handling events or event listener and event bubbling and event capturing](#[-handling-events-or-event-listener-and-event-bubbling-and-event-capturing)
  - [ setTimeout and setInterval](#[-settimeout-and-setinterval)
  - [ forEach method](#[-foreach-method)
  - [ template literals](#[-template-literals)
  - [ normal functions](#[-normal-functions)
  - [ spread operators](#[-spread-operators)
  - [ promise chaining](#[-promise-chaining)
  - [ optional chaining](#[-optional-chaining)
  - [ conditional operator](#[-conditional-operator)
  - [ function expressions](#[-function-expressions)
  - [ Random Number](#[-random-number)
  - [ Math.random()](<#[-math.random()>)
  - [ Enum](#[-enum)
  - [ nodemailer](#[-nodemailer)
  - [ Send email through outlook using nodemailer](#[-send-email-through-outlook-using-nodemailer)
  - [ Send email through gmail using nodemailer](#[-send-email-through-gmail-using-nodemailer)
  - [ Send Email From Your App Without a Backend](#[-send-email-from-your-app-without-a-backend)
  - [ Database Connection](#[-database-connection)
  - [ PostGresSQLConnection](#[-postgressqlconnection)
  - [ Install following package](#[-install-following-package)
  - [ Create a JS file like queries.js and Add following import statement](#[-create-a-js-file-like-queries.js-and-add-following-import-statement)
  - [ Create Connection With PostGresSQL DB](#[-create-connection-with-postgressql-db)
  - [ Get Data from postgres table](#[-get-data-from-postgres-table)
  - [ Export above created function, so that you could import in other JS file](#[-export-above-created-function,-so-that-you-could-import-in-other-js-file)
  - [ Using Object Literals Instead of Switch Case](#[-using-object-literals-instead-of-switch-case)
    - [ function to getMarkRange() using switch case](<#[-function-to-getmarkrange()-using-switch-case>)
    - [ function to getMarkRange() using Object literal](<#[-function-to-getmarkrange()-using-object-literal>)
  - [ rest syntax](#[-rest-syntax)
  - [ Array Destructuring using rest syntax](#[-array-destructuring-using-rest-syntax)
  - [ Receiving Data using rest syntax](#[-receiving-data-using-rest-syntax)
  - [ Object Destructuring using rest syntax](#[-object-destructuring-using-rest-syntax)
  - [ Spreading data](#[-spreading-data)
  - [ Spreading into a function call turns Array elements into function call arguments](#[-spreading-into-a-function-call-turns-array-elements-into-function-call-arguments)
  - [ Remote command execution via SSH using NodeJS](#[-remote-command-execution-via-ssh-using-nodejs)
  - [ Create a Unique ID](#[-create-a-unique-id)
  - [ Switch Case Statement Simplify using Object Literals](#[-switch-case-statement-simplify-using-object-literals)
    - [ We can use an "Object Lookup Map" instead of a "switch" statement for a cleaner syntax. Above switch statement re-written in Object Lookup map format.](#[-we-can-use-an-"object-lookup-map"-instead-of-a-"switch"-statement-for-a-cleaner-syntax.-above-switch-statement-re-written-in-object-lookup-map-format.)
  - [ Meaning of ^ and ~ symbols mentioned in the package.json file for the package version](#[-meaning-of-^-and-~-symbols-mentioned-in-the-package.json-file-for-the-package-version)
  - [ How To Create Express Server](#[-how-to-create-express-server)
  - [ How To Create Server Using Express/NodeJS](#[-how-to-create-server-using-express/nodejs)
  - [ Install following package](#[-install-following-package)
  - [ Add following at start of file (create a JS file like index.js)](<#[-add-following-at-start-of-file-(create-a-js-file-like-index.js)>)
  - [ Open CMD prompt](#[-open-cmd-prompt)
  - [ Fetch Data from API](#[-fetch-data-from-api)
  - [ Different ways to fetch data from API](#[-different-ways-to-fetch-data-from-api)
  - [ Create ENUM in JavaScript](#[-create-enum-in-javascript)
  - [ Array method()](<#[-array-method()>)
  - [ Mutating Array methods](#[-mutating-array-methods)
    - [ Mutating Array Methods list](#[-mutating-array-methods-list)
- [ Array -> Filter() method](<#[-array-->-filter()-method>)
  - [ variable scope->Understanding](#[-variable-scope->understanding)
  - [ Array -> map() method](<#[-array-->-map()-method>)
  - [ Array -> reduce() method](<#[-array-->-reduce()-method>)
  - [ Array -> Remove Duplicate Values](#[-array-->-remove-duplicate-values)
  - [ remove duplicate Using Set](#[-remove-duplicate-using-set)
  - [ remove duplicate Using Array reduce() method](<#[-remove-duplicate-using-array-reduce()-method>)
  - [ remove duplicate Using Array filter() method](<#[-remove-duplicate-using-array-filter()-method>)
  - [ Remove duplicates from an array of objects by one property](#[-remove-duplicates-from-an-array-of-objects-by-one-property)
  - [ Remove duplicates from an array of objects by multiple properties](#[-remove-duplicates-from-an-array-of-objects-by-multiple-properties)
  - [ How to make arrays mutable](#[-how-to-make-arrays-mutable)
  - [ Array](#[-array)
  - [ Interview PreParation](#[-interview-preparation)
  - [ JS Common Questions](#[-js-common-questions)
  - [ How to explain Event loop and async js](#[-how-to-explain-event-loop-and-async-js)
  - [ How to explain Hoisting and temporal dead zone](#[-how-to-explain-hoisting-and-temporal-dead-zone)
  - [ How to explain scope and scope chain](#[-how-to-explain-scope-and-scope-chain)
  - [ How to explain prototypal inheritance and chaining](#[-how-to-explain-prototypal-inheritance-and-chaining)
  - [ How to explain promises and queues](#[-how-to-explain-promises-and-queues)
  - [ How to explain async await in interviews](#[-how-to-explain-async-await-in-interviews)
  - [ How to answer closure and lexical scoping](#[-how-to-answer-closure-and-lexical-scoping)
  - [ How to answer THIS in interviews](#[-how-to-answer-this-in-interviews)
  - [ How to explain call bind and apply in interviews](#[-how-to-explain-call-bind-and-apply-in-interviews)
  - [ Coding Problem Using JavaScript](#[-coding-problem-using-javascript)
    - [ Reverse a String](#[-reverse-a-string)
    - [ Sum of array elements](#[-sum-of-array-elements)
    - [ Largest/Smallest number in array](#[-largest/smallest-number-in-array)
    - [ Remove duplicates from an array](#[-remove-duplicates-from-an-array)
    - [ Remove All Whitespace from a String in JavaScript](#[-remove-all-whitespace-from-a-string-in-javascript)
  - [ If you want to get the text that a user selects or highlights on a web page, there is a useful one-liner for that](#[-if-you-want-to-get-the-text-that-a-user-selects-or-highlights-on-a-web-page,-there-is-a-useful-one-liner-for-that)
  - [ There is a method called scrollTo(x,y), it allows you to scroll to a particular set of used coordinates](<#[-there-is-a-method-called-scrollto(x,y),-it-allows-you-to-scroll-to-a-particular-set-of-used-coordinates>)
  - [ If you want to have a smooth scrolling animation](#[-if-you-want-to-have-a-smooth-scrolling-animation)
  - [ If you want to redirect the user to a specified location, you can do something like this](#[-if-you-want-to-redirect-the-user-to-a-specified-location,-you-can-do-something-like-this)
  - [ JS Common Interview Questions](#[-js-common-interview-questions)
  - [ Data Structure Introduction](#[-data-structure-introduction)
  - [ Stack](#[-stack)
  - [ Queue](#[-queue)
  - [ Linked List](#[-linked-list)
  - [ Binary Trees](#[-binary-trees)
  - [ Recursion](#[-recursion)
  - [ Graph](#[-graph)
  - [ Dynamic Programming](#[-dynamic-programming)
  - [ Amortized space time complexity practice](#[-amortized-space-time-complexity-practice)
  - [ Sorting Algorithm](#[-sorting-algorithm)
  - [ Bubble sort](#[-bubble-sort)
  - [ Insertion sort](#[-insertion-sort)
  - [ Merge Sort](#[-merge-sort)
  - [ Quick Sort](#[-quick-sort)
  - [ Selection Sort](#[-selection-sort)

---

# JavaScript

## How JavaScript works

Everything in JS happens inside an Execution context. it is a synchronous single-threaded language.

#### Execution Context : Component where JS is executed. It has

##### Memory or variable Env -

    Here variables are stored as `key:value` pair

##### Code Env or Thread of Execution -

    This is the place where code is executed one line at a time

## Variables

### Things to Keep in mind when naming a variable

- `Names should be self descriptive with enough context so we don't have to comment out code`
- `Descriptive names are better than comments`
- `Avoid single letter names`
- `prefer explicit over implicit names`
- `Use descriptive loop indexes instead of i, j, k`
- `Avoid double negatives`
- `Use verb as a prefix for the function name`
- `No magic number or magic values, use a variable`
- `Don't use abbreviations or acronyms without sufficient contexts`
- `Make variable name as long as necessary if needed but no longer`
- `A prefix like is, are , or has helps to distinguish a boolean from another variable`

### variable scope->Understanding

```
/* Declaring a variable in the global scope. its life span is whole program */
var globalScopeVariable = 7;

function test() {
  /* Declaring a variable in the function scope. It's life span is in function only*/
  var functionScopeVariable = 10;

  /* Declaring a variable in the local scope, inside a for loop. It's life span is inside for loop only */
  for (let index = 0; index < functionScopeVariable; index++) {
    console.log(index);
  }
}

test();
```

- `console.log(functionScopeVariable); //will throw error - ReferenceError: functionScopeVariable is not defined. Reason we are trying to use this outside of function scope`

`const accountId = 14456;
let accountEmail = "abhay@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
// accountId =2; //not allowed
accountEmail ="hc@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"
console.log(accountId);

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])`

**Prefer not to use var because of issue in block scope and functional scope**

`console.log('accountState',accountState);`

## Data Conversion

`let score = true;

let valueInNumber = Number (score);
console.log(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);`

\* Outcome :

1. if score = 33, output will be number & 33
2. if score= "33" output will be number & 33
3. if score = "33abc" output will be number & NaN
4. if score = null output will be number & 0
5. if score = undefined output will be number & NaN
6. if score = true output will be number & 1
   \*/

**Boolean conversion**
Boolean(score);
1 => true; 0 => false
"" => false
"abhay" => true

`To Do` : All possible Data Type Conversion

### Data Types

**"use strict"** //treat all JS code as newer version in whole file

// alert(3+3) // cant use in nodejs, can be used browser. Currently, we are running in nodejs
//JavaScript : 7 Primitive Data types
// 1. String
let name = "Abhay" //String data types

// 2. number
let age =18 // number data types

// 3. BigInt

// 4. Boolean
let isLoggedIn = false //boolean data types -- true/false

// 5. undefined
let abc = undefined // when value is not defined or assigned

// 6. null
let ab = null // it is a standalone value, its a type. repretensation of empty value
// 7. symbol

//Object Data Type
// 1. An Object
// 2. An Array
// 3. A date

// symbol - used to uniquley define a component

// object

`typeof variable //will show type of variable
console.log(typeof undefined); //undefined reason value not assigned, is a datatype
console.log(typeof null); //object, null is an object`

## If

### Multiple ways to write if conditions

**Classical approach**

`
const status = 'online'

if (status ==='online' || status === 'away' || status ==='busy'){
console.log('Do Something')
}
`

**A better approach**

`if (['online','away', 'busy'].indexOf(status)!== -1){
 console.log('Do Something')
}`

`Check IndexOf with `~` operator`

```

if (~['online','away', 'busy'].indexOf(status)){
 console.log('Do Something')
}
```

`Even better, using includes method`

```
if (['online','away', 'busy'].includes(status)){
 console.log('Do Something')
}
```

## Loops in JavaScript

### Different types of Loops supported in JavaScript

**Here is sample array of objects**

```
const carShowRoom = [
  {id:1,name:'Maruti', model:"Swift"},
  {id:2,name:'Tata', model:"Nexon"},
  {id:3,name:'Mahindra', model:"Bolero"},
  {id:4,name:'Benz', model:"car"}
];
```

### Using For Loop

```
for (let index=0; index<carShowRoom.length;index++){
console.log(carShowRoom[index].name)
}
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using ForEach

```
carShowRoom.forEach(function(car, index, carShowRoom){
console.log(`Name: ${car.name} Model : ${car.model}`)
})
```

#### Output:

```
Name: Maruti Model : Swift
Name: Tata Model : Nexon
Name: Mahindra Model : Bolero
Name: Benz Model : car

```

### Using ForOff

```
for (let vehicle of carShowRoom){
  console.log(`Name: ${vehicle.name} Model : ${vehicle.model}`)
}
```

#### Output:

```
Name: Maruti Model : Swift
Name: Tata Model : Nexon
Name: Mahindra Model : Bolero
Name: Benz Model : car
```

### Using while loop

```
let index =0;
while(index<carShowRoom.length){
  console.log(carShowRoom[index].name)
  index++;
}
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using Do while loop

```
let index =0;
do {
  console.log(carShowRoom[index].name)
  index++;
}while(index<carShowRoom.length)
```

#### Output:

```
Maruti
Tata
Mahindra
Benz
```

### Using Map

```
let car = carShowRoom.map(carShowRoom => carShowRoom.name);
console.log(car)
```

#### Output:

```
[ 'Maruti', 'Tata', 'Mahindra', 'Benz' ]
```

#### What is console.log

whatever is given to console.log, should get displayed as output.

print multiple values in table
console.table([accountId,accountEmail,accountPassword,accountCity])

#### JavaScript datatype

"use strict" //treat all JS code as newer version in whole file

// alert(3+3) // cant use in nodejs, can be used browser. Currently, we are running in nodejs
let name = "Abhay" //String data types
let age =18 // number data types
let isLoggedIn = false //boolean data types -- true/false
let ab = null // it is a standalone value, its a type. repretensation of empty value
let abc = undefined // when value is not defined or assigned
// symbol - used to uniquely define a component

// object

console.log(typeof undefined); //undefined reason value not assigned
console.log(typeof null); //is a type

## Use proper variable names

- Use the specific naming convention, can use camel case naming convention

```
const f ="akash";
const akos = assets.filter(a=>a.type=='open')

const firstName='Akash';
const status = assets.filter(shop=>shop==='open')
```

## JavaScript Good Practice

👉Use Strict Mode: Always enable strict mode at the top of your scripts or functions. It helps catch common coding mistakes and prevents the use of potentially problematic features.

👉Declare Variables Properly: Always use `let`, `const`, or `var` to declare variables. Avoid relying on implicit global variables.

👉Avoid Global Variables:Minimize the use of global variables to prevent unintended interactions between different parts of your code.

👉Use Descriptive Variable and Function Names: Choose meaningful names for variables and functions. This improves code readability and makes it easier to understand your code's purpose.

👉Comment Your Code: Add comments to explain complex sections of your code, especially if it's not immediately obvious what the code does.

👉Indentation and Formatting: Maintain consistent indentation and formatting. This makes your code easier to read and reduces the risk of syntax errors.

👉Avoid Magic Numbers and Strings: Replace magic numbers and strings with named constants or variables to make your code more maintainable.

👉Error Handling: Implement proper error handling using `try...catch` blocks to gracefully handle exceptions and prevent crashes.

👉Use Functions for Code Reusability: Write functions to encapsulate and reuse code. Avoid duplicating code blocks.

👉Check Types and Use Type Coercion Wisely: Be aware of JavaScript's type system, and use `typeof`, `instanceof`, or functions like `isNaN()` to validate data types before operations.

👉Avoid Asynchronous Callback Hell: Use promises, async/await, or libraries like `async.js` to manage asynchronous code and avoid deeply nested callback structures.

👉Test Your Code: Implement unit tests and automated testing frameworks like Jest to catch bugs early and ensure your code behaves as expected.

👉Code Reviews: Encourage code reviews within your team. Fresh perspectives can help identify potential issues.

👉Use a Linter: Employ a JavaScript linter like ESLint to enforce coding standards and catch common mistakes.

👉Keep Dependencies Updated: Regularly update your project's dependencies to patch security vulnerabilities and ensure compatibility.

👉Optimize for Performance: Be mindful of performance bottlenecks and optimize critical sections of your code when necessary.

#### What is block scope and functional scope

#### Why should not use `var`

Prefer not to use `var` because of issue in block scope and functional scope

#### What is undefined in JavaScript

When you declare a variable & do not assign any value to it, it is undefined. ex.

```
let accountState;
console.log(accountState);
```

`undefined` is the output of above code

//TO Read
https://www.linkedin.com/posts/saboor-malik-993b03202_75-useful-javascript-code-snippets-activity-7106737879598440448-gEWg?utm_source=share&utm_medium=member_desktop

### set

### null

### map

### filter

### loops

### String

### BigInt

### Object

### Reflect

### scopes

### Symbol

### Boolean

### currying

### closures

### Number

### variables

### promise & promise API and CallBack adn fetch

### call stack

### web APIs

### undefined

### deep copy

### data types

### event loop

### statements

### asynchrony

### async - await

### conditionals

### map method

### shallow copy

### destructuring

#### Object Destructuring

#### Array Destructuring

#### Rest Operator

#### Spread Operator

### pure function

### lexical scoping

### arrow function

### array functions

var marks = [20,45,37,100]
marks.push(65) //will add element at end
marks.pop() //will remove element at end
marks.shift() //will remove element at start
marks.unshift() //will add element at start
marks.indexOf(12) //returns index of element from array
marks.includes(120) //check if this value is in array

#### Break the array

marks.slice(2,5)

#### Sort String Array

let fruits = ["Banana","Apple"]
fruits.sort() //return sorted array

#### Sort Number Array

let fruits = [1,2,6,9,3,100,40]

### Check weather passed String is numeric or not

````function isNumeric(value) {
  return /^-?\d*\.?\d+$/.test(value);
}```

```function isNumeric(value) {
  return !isNaN(Number(value));
}
````

### string methods

### named imports

### default imports

### reduce method

### handling events or event listener and event bubbling and event capturing

### setTimeout and setInterval

### forEach method

### template literals

### normal functions

### spread operators

### promise chaining

### optional chaining

### conditional operator

### function expressions

### Random Number

`True Random Number`: are generated based on external factors e.g. generating randomness using surroundings noise. It is time consuming to generate.
`Pseudo Random Number`: are generated based on an algorithm and seed value. can be used in cryptography e.g. OTP

#### Math.random()

returns a double type pseudo-random number, greater than or equal to zero and less than one.

`let num = Math.random() -- return number between 0 and 1, every execution will generate new number`

## Enum

## nodemailer

### Send email through outlook using nodemailer

### Send email through gmail using nodemailer

### Send Email From Your App Without a Backend

https://www.abstractapi.com/guides/react-send-email-from-your-app-without-a-backend

## Database Connection

## PostGresSQLConnection

### Install following package

```
    "pg": "^8.8.0",
```

### Create a JS file like queries.js and Add following import statement

```
const { response, request } = require("express");
require("log-timestamp");
const Pool = require("pg").Pool;
var types = require("pg").types;
const ping = require("ping");
const { deviceDetails } = require("./DeviceList");
//var Ping = require("ping-lite");
const momenttimezone = require("moment-timezone");
```

### Create Connection With PostGresSQL DB

```
const pool = new Pool({
  user: "testloguser", //login user
  host: "localhost",
  database: "testlog", //database name
  password: "testloguser", // password
  port: 5432,//port where postgres is running
});
```

### Get Data from postgres table

```
const getDefectList = (request, response) => {
  try {
    let queryString ="select * from defects"; //make sure defects table exists in your database
    pool.query(queryString, (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    });
  } catch (error) {
    console.log(error);
  }
};
```

### Export above created function, so that you could import in other JS file

```
module.exports = {
  getDefectList
};
```

## Using Object Literals Instead of Switch Case

#### function to getMarkRange() using switch case

```
function getMarkRange(grade) {
let range;
//Checking the value of the grade variable and returning the range of the grade using Switch case
switch (grade) {
case "A":
range = "100-70";
break;
case "B":
range = "40-69";
break;
case "C":
range = "0-39";
break;
}
return `range is ${range}`;
}
console.log(getMarkRange("B"));
```

#### function to getMarkRange() using Object literal

```
function getMarkRangeWithObjectLiteral(grade) {
let range = {
A: "100-70",
B: "40-69",
C: "0-39",
}[grade];
return `range is ${range}`;
}

console.log(getMarkRange("B"));
```

## rest syntax

## Array Destructuring using rest syntax

Array destructuring is flexible. It uses less space, and even allows you to ignore values. You can even get the remaining elements as a new array.
Instead of accessing elements individually, one by one, you can get multiple at once.

```
const kidsName = ["Govind","Gopal","Pari","Kanhu","Aayu"]

//traditional way of accessing array values
const firstValue = kidsName[0];
const secondValue = kidsName[1];
console.log(firstValue);
console.log(secondValue);
```

```
const [firstValue, ,thirdValue, ...rest] = kidsName

console.log(firstValue);
console.log(thirdValue);
console.log(rest);
```

`Output:`
Govind
Pari
[ 'Kanhu', 'Aayu' ]

## Receiving Data using rest syntax

A rest parameter is a special kind of parameter that receives all remaining arguments of a function call via array.

```
function myFunc(first, ...remaining) {
  return {first, remaining}
}

console.log(myFunc(1,2,3))
```

`Output:`
{ first: 1, remaining: [ 2, 3 ] }

## Object Destructuring using rest syntax

```
const {first:f, ...remaining} = {first:'Kanhu', last:'Pari', age:5}

console.log(f)
console.log(remaining)
```

`Output:`
Kanhu
{ last: 'Pari', age: 5 }

## Spreading data

## Spreading into a function call turns Array elements into function call arguments

```
function returnArgArray(...args){
  return args
}

returnArgArray(...[1,2,3])

console.log(returnArgArray(...[1,2,3]))
`Output:`
[ 1, 2, 3 ]

//spread arrays into Array literals
console.log(returnArgArray(...[1,2,3],4))
`Output:`
[ 1, 2, 3, 4 ]
```

## Remote command execution via SSH using NodeJS

- 1st step, install `npm install --save simple-ssh`

```
const SSH = require('simple-ssh'); //load into project

//create instance of SSH
var ssh = new SSH({
    host: 'IP_ADDRESS',
    user: 'USERNAME',
    pass: 'PASSWORD'
});

//Run any command via exec command
ssh.exec(CMD, {
    out: function (stdout) { console.log(stdout); },
    err: function (stderr) { console.log(stderr); },
    exit: function (code) { console.log(code); }
}).start();
```

//Run actual command like this
ssh
.exec("online", {
out: function (stdout) {
console.log(stdout);
},
err: function (stderr) {
console.log(stderr);
},
exit: function (code) {
console.log(code);
},
})
.start();

### Create a Unique ID

```
const uid = () =>{
  //Get current time and convert to String, String(36) converts large number to base 36
  const head = Date.now().toString(36);


  //Generate random number and covert to string of base 36
  const tail = Math.random().toString(36).substr(2);

  //concatenate both string value
  return head+tail;
}

//call uid function
uid()
```

`Sample Output :`
`l2o6trgk3prw6bdui96`

:::tip Tip

You can add write uid function in util.js file like
export const uid = () =>{ } and add import statement `import {uid} from ../utils;` and call uid() function

## Switch Case Statement Simplify using Object Literals

```
/*
 function to getMarkRange() using switch case
*/
function getMarkRange(grade) {
  let range;
  //Checking the value of the grade variable and returning the range of the grade using Switch case
  switch (grade) {
    case "A":
      range = "100-70";
      break;
    case "B":
      range = "40-69";
      break;
    case "C":
      range = "0-39";
      break;
  }
  return `range is ${range}`;
}
console.log(getMarkRange("B"));
```

`Output :`
40-69

#### We can use an "Object Lookup Map" instead of a "switch" statement for a cleaner syntax. Above switch statement re-written in Object Lookup map format.

```
/*
 function to getMarkRange() using Object literal
*/
function getMarkRangeWithObjectLiteral(grade) {
  let range = {
    A: "100-70",
    B: "40-69",
    C: "0-39",
  }[grade];
  return `range is ${range}`;
}

console.log(getMarkRange("B"));

```

`Output :`
40-69

## Meaning of ^ and ~ symbols mentioned in the package.json file for the package version

Whenever we install any npm package, a new entry is added in the dependencies or devDependencies section of the package.json file in the following format:

```
"dependencies": {
"axios": "^0.24.0"
}
```

The version number 0.24.0 is a combination of 3 digits separated by the dot operator. Let’s say the version is a.b.c

<ol>
<ul>First value (a in a.b.c) specifies the major version of the package - It means this version has Major code changes and it might contain breaking API changes.</ul>
<ul>Second value (b in a.b.c) specifies the minor version which contains minor changes but will not contain breaking API changes.</ul>
<ul>Third value (c in a.b.c) specifies the patch version which usually contains bug fixes.</ul>
</ol>

`^` : This symbol means when we want to update all the packages mentioned in package.json, using npm update, it will update to only patch and minor released version.

So if your current version is 0.24.0 and there is a minor version released so the package will be updated to 0.25.0.

If there is only a patch version released then it will be updated to the latest available patch version like 0.24.1.

`~`: This symbol means the package will be updated to only patch releases when we run the npm update command i.e only the last digit so from 0.24.0 to 0.24.1 or 0.24.2 but not 0.25.0 or 1.24.0

If there is no symbol like "axios": "0.24.0" then exact same version will be installed after running the npm update command.

You can also update the specific npm package by adding the package name after the npm update command gitlike this: npm update axios.

## How To Create Express Server

## How To Create Server Using Express/NodeJS

### Install following package

```
    "cors": "^2.8.5",
    "express": "^4.18.2"
```

### Add following at start of file (create a JS file like index.js)

```
const express = require("express");
const bodyParser = require("body-parser");
const { request } = require("express");
const db = require("./queries");
const cors = require("cors");
var http = require("http");
var https = require("https");

const router = express.Router();

const app = express();
const port = 5000;

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(compression());

app.get("/", (request, response) => {
  response.json({ info: "node.JS, Express and PostGres API" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

```

### Open CMD prompt

```
node index.js
```

`Output: `
App running on port 5000.

## Fetch Data from API

## Different ways to fetch data from API

- using **fetch** API
  This method accept URI to the data. To do this, first create a function fetchData(), it will call fetch() method with provided URL, then convert the result to JSON Object.

  ```
  const fetchData = () =>{
  return fetch("https://api.agify.io/?name=bella")
   .then((response)=>response.json())
   .then((response)=>console.log(response))
   .catch(err => console.error(err));
  }

  fetchData() //call function
  ```

  `Output: `
  {name: 'bella', age: 35, count: 40138}

  `Failure response : Failed to fetch at \_app-c265dce31871f367.js:1:752592 at fetchData (<anonymous>:2:10) at <anonymous>:7:1 `

:::tip You can specify header info also

```
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com',
		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
	}
};

const fetchData = () =>{
  return fetch("https://api.agify.io/?name=bella", options)
   .then((response)=>response.json())
   .then((response)=>console.log(response))
   .catch(err => console.error(err));
  }
```

- using **Async - Await** Syntax
  Remove **.then()** callback and simply get back asynchronously resolved data.
- using **Axios** library
- using **Custom react hooks**
- using **Use React Query** library
- using **Using GraphQL** API

### Create ENUM in JavaScript

```
const Days = Object.freeze({
    MONDAY:0,
    TUESDAY:1,
    WEDNESDAY:2,
    THURSDAY:3,
    FRIDAY:4,
    SATURDAY:5,
    SUNDAY:6,
})
```

## Array method()

## Mutating Array methods

Mutating array methods are one who mutate (Mutation is basically changing the array itself instead of returning a new array with the new changes) the original array right away, when executed.

It helps in following -

- `Avoid accidentally mutating : ` The original array should not be mutated right away
- `Do Easier mind map : `
- `These mutating methods need to be executed first`

#### Mutating Array Methods list

- `.copywithin() : ` use this to copy elements from within the array. It then replaces the pre-existing elements accordingly.
- .splice()
- .fill()
- .pop() - removes the last element from the array. This run on O(1) time .
- .push() - Adds elements to the end of array. This run on O(1) time .
- .reverse() -
- .sort()
- .unshift() - Adds element to the beginning of an array. This runs in O(n) time reason have to duplicate/move the entire array.
- .shift() - removes first element from the array. This runs in O(n) time reason have to duplicate/move the entire array.

```
//How to filter below array which has 'world' in it

/* Creating an array of strings. */
var wordsArray = [
  "hello-world",
  "hello1-world",
  "hello-we-world",
  "hello-hello",
  "jello-bello",
];


/* Filtering the array and returning the array which has the text "world" in it. */
var newArray = wordsArray.filter((wordHavingTextAsWorld) =>
  wordHavingTextAsWorld.includes("world")
);

//or with return statement
newArray = wordsArray.filter((wordHavingTextAsWorld) => {
  return wordHavingTextAsWorld.includes("world");
});

/* Printing the array which has the text "world" in it. */
console.log(newArray);


//Output ->
 //[ 'hello-world', 'hello1-world', 'hello-we-world' ]

```

# Array -> Filter() method

## variable scope->Understanding

Filter() method creates a new array from existing array with elements that pass a test provided by a function. It does not execute the function for empty elements. It method does not change the original array.

```
//How to filter below array which has 'world' in it

/* Creating an array of strings. */
var wordsArray = [
  "hello-world",
  "hello1-world",
  "hello-we-world",
  "hello-hello",
  "jello-bello",
];


/* Filtering the array and returning the array which has the text "world" in it. */
var newArray = wordsArray.filter((wordHavingTextAsWorld) =>
  wordHavingTextAsWorld.includes("world")
);

//or with return statement
newArray = wordsArray.filter((wordHavingTextAsWorld) => {
  return wordHavingTextAsWorld.includes("world");
});

/* Printing the array which has the text "world" in it. */
console.log(newArray);


//Output ->
 //[ 'hello-world', 'hello1-world', 'hello-we-world' ]

```

```
//Filter -> used to filter value from array
function isOdd(x) {
  return x % 2;
}

//function code outside filter
output = arr.filter(isOdd);
console.log(output);

//function code inside filter
output = arr.filter(function isEven(x) {
  return x % 2 === 0;
});
console.log(output);

//function code as arrow function
output = arr.filter((x) => x % 2 === 0);
console.log(output);
```

## Array -> map() method

//Map -> it transform an array
const arr = [5, 4, 3, 6, 9, 7];

function double(x) {
return x \* 2;
}

//function is outside
let output = arr.map(double);
console.log(output);

//function is inside map
output = arr.map(function triple(x) {
return x \* 3;
});
console.log(output);

//using arrow function approach
output = arr.map((x) => x \* 4);
console.log(output);

//binary value
output = arr.map((x) => x.toString(2));
console.log(output);

## Array -> reduce() method

//Reduce
//traditional way of calculating values
function findSum(arr) {
let sum = 0;
for (let index = 0; index < arr.length; index++) {
sum = sum + arr[index];
}
return sum;
}

console.log(findSum(arr));

//using reduce method
output = arr.reduce(function (acc, curr) {
acc = acc + curr;
return acc;
});
console.log(output);

//find max value using traditional ways
function findMax(arr) {
let max = 0;
for (let index = 0; index < arr.length; index++) {
if (arr[index] > max) {
max = arr[index];
}
}

return max;
}

console.log(findMax(arr));

//finding max value using reduce method
output = arr.reduce(function (max, curr) {
if (curr > max) {
max = curr;
}
return max;
}, 0); //0 is initial value of variable max
console.log(output);

const users = [
{ firstName: "Abhay", lastName: "Bharti", age: 34 },
{ firstName: "Alok", lastName: "kumar", age: 45 },
{ firstName: "Awanish", lastName: "kumar", age: 38 },
{ firstName: "Gajju", lastName: "kumar", age: 38 },
];

//print list of fullname
output = users.map((x) => x.firstName + " " + x.lastName);
console.log(output);

//count same age person
output = users.reduce(function (acc, curr) {
if (acc[curr.age]) {
acc[curr.age] = ++acc[curr.age];
} else {
acc[curr.age] = 1;
}
return acc;
}, {}); //{} assigns acc as {} object

console.log(output);

//filter based on value and return as list
output = users.filter((x) => x.age > 34).map((x) => x.firstName);
console.log(output);

### Array -> Remove Duplicate Values

```
const letters = ['a','b','c','d','d','e','f','f']
```

#### remove duplicate Using Set

```
const unique = [... new Set(letter)]
console.log(unique)

```

`Output :`

- [ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### remove duplicate Using Array reduce() method

```
const unique = letters.reduce((result,letter)=>{
  return result.includes(letters)? result:[...result, letters];
},[])
console.log(unique)
```

`Output :`

- [ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### remove duplicate Using Array filter() method

```
const unique = letters.filter((letter,index)=>{
  return letters.indexOf(letter)===index;
})
console.log(unique)
```

`Output :`

- [ 'a', 'b', 'c', 'd', 'e', 'f' ]

#### Remove duplicates from an array of objects by one property

```
const members = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'Johnny' },
  { id: 4, name: 'Alice' },
];
const unique = [...new Map(members.map((m) => [m.id, m])).values()];
console.log(unique)
```

`Output :`

- [
  { id: 1, name: 'Johnny' },
  { id: 2, name: 'Jane' },
  { id: 4, name: 'Alice' }
  ]

How it works

- Create a new aray from the original array using map() method
  `members.map((m) => [m.id, m])`
- It returns an array of arrays. Each nested array contains the value of the id and the corresponding object:

```
[
 [ 1, { id: 1, name: 'John' } ],
 [ 2, { id: 2, name: 'Jane' } ],
 [ 1, { id: 1, name: 'Johnny' } ],
 [ 4, { id: 4, name: 'Alice' } ]
]
```

- Second, remove the duplicate by creating a new Map() object:

```
const newMap = new Map(newArray);
```

- Because the keys of a Map object are unique, creating a Map from the array of array removes the duplicate object by key (id in this case).

```dotnetcli
const iterator = newMap.values();
console.log(iterator);
[Map Iterator] {
  { id: 1, name: 'Johnny' },
  { id: 2, name: 'Jane' },
  { id: 4, name: 'Alice' }
}
```

#### Remove duplicates from an array of objects by multiple properties

https://www.javascripttutorial.net/array/javascript-remove-duplicates-from-array/

## How to make arrays mutable

`
const kidsName = ["Govind","Gopal","Pari","Kanhu","Aayu"]

Object.freeze(kidsName) //Make it immutable, user can not edit/update values & add new element in array

//If you try to add/update value of array, will throw TypeError
kidsName.push("Lal");
kidsName[1] ="AB"
`

`Output :`
`TypeError: Cannot add property 5, object is not extensible at Array.push (<anonymous>) at Object.<anonymous> (/home/runner/2wq0fv6bhic/index.js:6:10) at Module._compile (internal/modules/cjs/loader.js:999:30)`

### Array

**.length**
use of the .length property of an array - this returns the number of elements in the array.

`arrayName[arrayName.length - 1]` //get last element of an array

`arrayName[arrayName.length - 1]` //update last element of an array

A **method** in JavaScript is a function that's associated with certain values or objects. An example **.log()** method, which is part of the console object.

**.push()** This method allows you to "push" a value to the end of an array. Here is an example to add the number 12 to the end of an array:

`arrayName.push(12);`

It returns the new length of the array, after adding the value you give it. If existing length was 2, after above push() operation, it will return value 3 which is new length of array.

**.pop()** This method removes the last element from an array and returns that element.

When a method returns a value, you can think of it as giving the value back to you, making it available for use in other parts of your code.

## Interview PreParation

### JS Common Questions

#### How to explain Event loop and async js

#### How to explain Hoisting and temporal dead zone

#### How to explain scope and scope chain

#### How to explain prototypal inheritance and chaining

#### How to explain promises and queues

#### How to explain async await in interviews

#### How to answer closure and lexical scoping

#### How to answer THIS in interviews

#### How to explain call bind and apply in interviews

## Coding Problem Using JavaScript

#### Reverse a String

```
let str = "abhay";
const reverseString = str.split("").reverse().join("");
console.log(reverseString);
```

#### Sum of array elements

```
const numbers = [1, 3, 4, 5, 6];
const sum = numbers.reduce((sum, curr) => sum + curr, 0);
console.log(sum);
```

#### Largest/Smallest number in array

```
console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
```

#### Remove duplicates from an array

```
const duplicateNumbers = [2, 3, 5, 5, 6];
const uniqueNumbers = [...new Set(duplicateNumbers)];
console.log(uniqueNumbers);
```

#### Remove All Whitespace from a String in JavaScript

To remove all whitespace from a string in JavaScript, call the replace() method on the string, passing a regular expression that matches any whitespace character, and an empty string as a replacement. For example, str.replace(/\s/g, '') returns a new string with all whitespace removed from str.
he \s regex metacharacter matches whitespace characters, such as spaces, tabs, and newlines.

We use the g regex flag to specify that all whitespace characters in the string should be matched. Without this flag, only the first whitespace will be matched and replaced:

```
const str = '1 2 3';

const whitespaceRemoved = str.replace(/\s/g, '');
console.log(whitespaceRemoved); // 123
```

### If you want to get the text that a user selects or highlights on a web page, there is a useful one-liner for that

```
const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText);
```

### There is a method called scrollTo(x,y), it allows you to scroll to a particular set of used coordinates

```
const scrollToTop = () => window.scrollTo(0,0);

```

### If you want to have a smooth scrolling animation

```
const Top = () => window.scrollTo({top:0, behavior:'smooth'});

```

### If you want to redirect the user to a specified location, you can do something like this

```
const urlRedirect = url => location.href = url;
urlRedirect('https://google.co.in');

```

### JS Common Interview Questions

### Data Structure Introduction

#### Stack

#### Queue

#### Linked List

#### Binary Trees

#### Recursion

#### Graph

#### Dynamic Programming

#### Amortized space time complexity practice

### Sorting Algorithm

#### Bubble sort

#### Insertion sort

#### Merge Sort

#### Quick Sort

#### Selection Sort
