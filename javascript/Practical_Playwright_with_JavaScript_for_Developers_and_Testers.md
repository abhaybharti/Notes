# Practical Playwright with JavaScript for Developers and Testers

## Level 1 : Variables and Data Types

By the end of this Level, you will know following :

- Define and use var, let and const
- Declare a variable and reassign value
- Using console.log()
- Difference between var, let and const

#### Problem 1.1 : Declare a variable using var, assign it a number and the log the value to the console

```sh {"id":"01J7P0R0PQ5Q19F82YNE05N5KR"}
var rollNum = 100;
console.log(rollNum); //100
```

var is the old way to declaring variables in javascript. Variables declared with var can be reassigned and redeclared within the same scope. It has function scope or global scope(if declared outside of a function)

```sh {"id":"01J7P0S1HFH4NYKWVGSNH3V9SM"}
var x = 5; //Declaring a variable ‘x’ and assigning the value 5 to it
console.log(x); //Output: 5

var x = 10; //Redeclaring variable ‘x’ and assigning new value 10. This is allowed with ‘var’
console.log(x); //Output : 10

function example(){
    var y =20;
    console.log(y); //Output: 20
}
console.log(y); //Error : ‘y’ is not defined - ‘var’ variables have function scope
```

#### Problem 1.2 : Declare a variable using let, assign it a string and log the value to the console

```sh {"id":"01J7P0WR9ADDB6ZND3VBC0FBRM"}
 let name = "JavaScript";
 console.log(name); //JavaScript
```

It was introduced in ES6 and is preferred/recommended way to declared variables in JavaScript. Variables declared with let   can be reassigned but not re-declared within the same scope. The have block scope meaning they are limited to the block in which they are defined.

```sh {"id":"01J7P0Y0WYGGWWS0MY9GVW0N02"}
let x = 5; //Declaring a variable ‘x’ and assigning the value 5 to it
console.log(x); //Output: 5

x = 10; //Reassigning value of ‘x’
console.log(x); //Output : 10

let x = 30; //Error ‘x’ has already been declared - redeclaration is not allowed with ‘let’

```

#### Problem 1.3 : Declare a variable using const, assign it a boolean value and the log the value to the console

```sh {"id":"01J7P0Z9FSB2XY60R4YGPGYERZ"}
const name = "JavaScript";
console.log(name); //JavaScript
```

const is also introduced in ES6. Variable declared with const must be assigned a value when declared, and this value cannot be changed or reassigned. It also has block scope.

```sh {"id":"01J7P0YFP9SCQ3N82CGPJ3W63T"}
const PI =3.24; //Declaring a constant ‘PI’ and assigning the value 3.14 to it
console.log(PI); //Output : 3.14

PI = 3.14159; //Error: Assignment to constant variable - can not reassign a constant variable
```

#### Problem 1.4 : create a variable of number and log variables type using the typeof operator

```sh {"id":"01J7P11JT025JDJJFDDN7R9ZQA"}
    let name = 100;
    console.log(typeof name); //number
```

#### Problem 1.5 : create a variable of string and log variables type using the typeof operator

```sh {"id":"01J7P11XFM3SPNB54AP9NN9X5M"}
let name = "JavaScript";
console.log(typeof name); //string
```

#### Problem 1.6 : create a variable of boolean and log variables type using the typeof operator

```sh {"id":"01J7P12H6Q75S0VBN1EDQK3QRF"}
let name = true;
console.log(typeof name); //boolean
```

#### Problem 1.7 : create a variable of object and log variables type using the typeof operator

```sh {"id":"01J7P13S43AA0JNWM8PT87CJY5"}
let Obj = {name:"AB"};
console.log(typeof Obj); //object
```

#### Problem 1.8 : create a variable of array and log variables type using the typeof operator

```sh {"id":"01J7P145RAHBVFGFBHEVE1DGGW"}
    let array = ["A","B"];
    console.log(typeof array);//object
```

#### Problem 1.9 : Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console

```sh {"id":"01J7P14E5CJSRQ0308MRDYAC41"}
    let dataOne = 100;
    console.log(dataOne); //100
    dataOne=200;
    console.log(dataOne); //200
```

#### Problem 1.10 : Try reassigning a variable declared with const and observe the error

```sh {"id":"01J7P14RQN9CHGK04PDKK0Q1X7"}
    const dataOne = 100;
    console.log(dataOne); //100
    dataOne=200;
    console.log(dataOne); //Output:
      ERROR!
      dataOne=200;
    
      TypeError: Assignment to constant variable.
```

#### Problem 1.11: Write a single script that declares variables of different data types and logs both the value and type of each variable to the console

#### Problem 1.12: Write a code that demonstrate the difference in behavior between let and const when it comes to Reassignment

#### Problem 1.13: What is difference between null and undefined

**undefined**
It means a variable has been declared, but not defined. For example:

```sh {"id":"01J7P169R27VP1QATD91GH0ASY"}
let value;
console.log(value); // undefined
```

You can also explicitly set a variable to equal undefined:

```sh {"id":"01J7P16RJ1TKP1MKB79HZYJNWR"}
let cValue = undefined;
console.log(cValue); // undefined
```

When you are looking up non-existent properties in an object, you will receive undefined:

```sh {"id":"01J7P175CYZ7MSRT5SXXRAGCC8"}
var Obj = {};
console.log(Obj.name); // undefined
```

##### null

There are two features of null you should understand:

- **null** is an empty or non-existent value.
- **null** must be assigned.

   Here’s an example. We assign the value of null to a:

let val = null;
console.log(val); // null

##### Similarities between null and undefined

In JavaScript there are only **six falsy values**. Both **null** and **undefined** are two of the six falsy values. Here’s a full list:

1. false
2. 0 (zero)
3. “” (empty string)
4. null
5. undefined
6. NaN (Not A Number)

#### Problem 1.14: How to add check for null or undefined in code on a variable

#### Problem 1.15: What is console.log

    console.log is used to output information to the web console/CMD console. In other words, it is actually an expression that retrieves the log property from the value held by console binding. It is helpful for debugging purposes, as it allows you to see the values of variables, the output of functions, and the flow of your program. Whatever value is given to console.log, gets displayed as output. Here are list of console method different options:
    
    
      - `console.log()` //Output general logging information to the console
      - `console.warn()` //Output a warning message to the console
      - `console.error()` //Output an error message to the console
      - `console.info()` //Output an informational message to the console
      - `console.debug()` //Output a debug message to the console
      - `console.table()` //Output data as a table to the console
      - `console.group()` //Creates a new inline group in the console, which can be used to group together related message.
      - `console.time()` //Starts a timer with a specific label
      - `console.timeEnd()` //Stops the timer with a specified label and logs elapsed time
      - `console.clear()` // clears the console
      - `console.count()` // Logs the number of times this particular call to console.count() has been called with the given label
      - `console.countReset()` // Reset the count for the specified label
      - `console.dir()` // Displays an interactive listing of the properties of a specified JavaScript object
      - `console.trace()` // Outputs a stack trace to the console

#### Problem 1.16: What is JavaScript

      `Interpreted Language`: JavaScript code is executed line-by-line by the browser's JavaScript engine.
    
      `Dynamic Typing`: Variables in JavaScript are not bound to any specific data type, and their type can change at runtime.
    
      `Prototype-Based`: JavaScript uses prototypes rather than classes for inheritance, allowing for flexible and dynamic object-oriented programming.
    
      `First-Class Functions`: Functions in JavaScript are treated as first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.
    
      `Event-Driven`: JavaScript is often used to handle events such as user inputs, mouse movements, and keystrokes.
    
      `Single-Threaded`: JavaScript runs in a single-threaded environment, but it can handle asynchronous operations through callbacks, promises, and async/await.
    
      `Cross-Platform`: JavaScript can run on any device with a web browser, making it a highly versatile language for web development.
    
      `Dynamically typed`:JavaScript is a dynamically typed language which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

#### Problem 1.17: How to write code in Chrome browser

    Developer Tools -> Sources -> Snippets -> New Snippet -> file name -> write code in right side pane -> Ctrl + S to save file

#### Problem 1.18: How to generate random number

`True Random Number:` are generated based on external factors e.g. generating randomness using surroundings noise. It is time consuming to generate.

`Pseudo Random Number:` are generated based on an algorithm and seed value. can be used in cryptography e.g. OTP
`Math.random()` : returns a double type pseudo-random number, greater than or equal to zero and less than one. This is good enough for general purpose coding work.

let num = Math.random() -- return number between 0 and 1, every execution will generate new number

## Level 2 : Operators

#### Problem 2.1 : Write a program to add two numbers and log the result to console

#### Problem 2.2 : Write a program to subtract two numbers and log the result to console

#### Problem 2.3 : Write a program to multiply two numbers and log the result to console

#### Problem 2.4 : Write a program to divide two numbers and log the result to console

#### Problem 2.5 : Write a program to find remainder when one number is divided by another and log the result to the console

#### Problem 2.6 : Use the += operator to add a number to a variable and log the result to the console

#### Problem 2.7 : Use the -= operator to subtract a number to a variable and log the result to the console

#### Problem 2.8 : Write a program to compare two numbers using > and < and log the results to console

#### Problem 2.9 : Write a program to compare two number using >= and <= and log the results to the console

#### Problem 2.10 : Write a program to compare two numbers using == and === and log the results to console

#### Problem 2.11 : Write a program that uses the && operator to combine two conditions and log the results to the console

#### Problem 2.12: Write a program that uses the || operator to combine two conditions and log the results to the console

#### Problem 2.13 : Write a program that uses the ! operator to negate conditions and log the results to the console

#### Problem 2.14 : Write a program that uses the ternary operator to check if a number is positive or negative and log the results to console

#### Problem 2.15: Write a script that performs basic Arithmetic operations (additions, subtraction, multiplication, division, remainder) on two number and log the results

### Problem 2.16: Create a script that compares two number using different comparison operator and combines conditions using logical operators, logging the results

### 2.17: Write a script that uses the ternary operator to determine if a number is positive or negative and log the results

### 2.18: What is difference between == and ===

### 2.19: What is hoisting and how does it work

## Level 3 : Control Structures

### Problem 3.1: Write a program to check if a number is positive, negative, or zero, and log the result to the console.

### Problem 3.2: Write a program to check if a person is eligible to vote (age >= 18) and log the result to the console.

### Problem 3.3: Write a program to find the largest of three numbers using nested if-else statements.

### Problem 3.4: Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console

### Problem 3.5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console

### Problem 3.6:Write a program that uses the ternary operator (conditional Ternary operator) to check if a number is even or odd and log the result to the console

### Problem 3.7: Write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.

### Problem 3.8: Write a script that checks if a number is positive, negative, or zero using if-else statements and logs the result.

### Problem 3.9: Create a script to check if a person is eligible to vote based on their age and log the result.

### Problem 3.10: Write a script that uses a switch case to determine the day of the week based on a number (1-7) and logs the day name

### Problem 3.11: Create a script that uses a switch case to assign a grade based on a score and logs the grade.

### Problem 3.12: Write a script that checks if a year is a leap year using multiple conditions and logs the result.

## Level 4 : Loops

#### Problem 4.1: Write a program to print numbers from 1 to 10 using a for loop

#### Problem 4.2: Write a program to print the multiplication table of 5 using a for loop

#### Problem 4.3: Write a program to calculate the sum of numbers from 1 to 10 using while loops

#### Problem 4.4: Write a program to print numbers from 10 to 1 using a while loop

#### Problem 4.5: Write a program to print numbers from 1 to 5 using a do.. while loop

#### Problem 4.6: Write a program to calculate the factorial of a number using a do... while

#### Problem 4.7: Write a program to print a pattern using nested for loops

- - - 

---

---

---

## Level 5 : Functions

#### Problem 5.1: What is function declaration

#### Problem 5.2: What is function expression

#### Problem 5.3: What is difference between function expression and declaration

#### Problem 5.4 : Write a function (using function declaration) to check if a number is even or odd and log the result to the console

#### Problem 5.5 : Write a function (using function declaration) to calculate the square of a number and return the result

#### Problem 5.6 : Write a function expression to find the maximum of two number and log the results to console

#### Problem 5.7 : Write a function expression to concatenate two strings and return the result

#### Problem 5.8 : Write an arrow function to calculate sum of two number and return the result

#### Problem 5.9 : Write an arrow function to check if a string contains a specific characters and return a boolean value

#### Problem 5.10 : Write a function that takes two parameters and return their product. Provide a default value for the second parameter

#### Problem 5.11 : Write a function that takes a person's name and age and returns a greeting message. Provide default value for the age.

#### Problem 5.12 : Write a higher order function that takes a function and a number and calls the function that many times.

#### Problem 5.13 : Write a higher order function that takes two function and a value, applies the second function to the result.

#### Problem 5.14 : What is callback function, why we need it

#### Problem 5.15 : How can one avoid callback hell in JavaScript

#### Problem 5.16 : What is concept of pure function

#### Problem 5.17 : What is difference between function.call, function.apply and function.bind

#### Problem 5.18 : What is the usage of argument object in a function

#### Problem 5.20 : What is difference between deep copy and shallow copy

#### Problem 5.21 : How does call stack works in JavaScript

#### Problem 5.22 : What is function curring

## Level 6 : Arrays

#### Problem 6.1 : Create an array of numbers from 1 to 5 and log the array to the console

#### Problem 6.2 : Access the first and last elements of the array and log them to the console

#### Problem 6.3 : Use the push method to add a new number to the end of the array and log the updated array

#### Problem 6.4 : Use the pop method to remove the last element from the array and log the updated array

#### Problem 6.5 : Use the shift method to remove the first element from the array and log the updated array

#### Problem 6.6 : Use the unshift method to add a new number to the beginning of the array and log the update array

#### Problem 6.7 : Use the map method to create a new array where each number is doubled and log the new array

#### Problem 6.8 : Use the filter method to create a new array with only even number and log the new array

#### Problem 6.9 : Use the reduce method to calculate the sum of all numbers in the array and log the results

#### Problem 6.10 : Use a for loop to iterate over the array and log each element to console

#### Problem 6.11 : Use the forEach method to iterate over array and log each element to the console

#### Problem 6.12 : Create a tow dimensional array (matrix) and the entire array to the console

#### Problem 6.13 : Access and Log a specific element from the two dimensional array

## Level 7 : Objects

#### Problem 7.1 : Create an object representing a book with properties like title, author and year and log the object to the console

#### Problem 7.2 : Access and log the title and author properties of book object

#### Problem 7.3 : Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.

#### Problem 7.4 : Add a method to the book object that takes a parameter (Year) and updates the book's year property, then log the updated object

#### Problem 7.5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

#### Problem 7.6 : Access and log the name of the library and the titles of all the books in the library

#### Problem 7.7 : Add a method to the book object that uses the `this` keyword to return a string with book's title and year and log the result of calling this method

#### Problem 7.8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value

#### Problem 7.9 : Use Object.keys and Object.values method a log all the keys and values of the book object.

#### Problem 7.10 : Explain difference between Object.create and the constructor pattern

#### Problem 7.11 : How do we prevent modification of object in JavaScript

#### Problem 7.12 : What is new keyword and its usage

#### Problem 7.13 : Explain concept of Object Destructuring in JavaScript

#### Problem 7.14 Write a script that creates a book object, adds method to it and logs its properties and method results

#### Problem 7.15 Write a script that defines a library object containing and arrya of book objects and logs the library's details

#### Problem 7.16 Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values

# Level 8 : ES6 + Features

#### Problem 8.1 : Use Template literals to create a string that includes variables for a person's name and age, and log the string to the console

#### Problem 8.2 : Create a multi line string using template literals and log it to console

#### Problem 8.3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to console

#### Problem 8.4 : Use Object destructuring to extract the title and author from a book object and log them to the console

#### Problem 8.5 : Use the `spread` operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console

#### Problem 8.6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result

#### Problem 8.7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameters

#### Problem 8.8 : Use enhanced object literals to create an object with methods and properties and log the object to the console

#### Problem 8.9 : Create an object with computed property names based on variables and log the object to the console

#### Problem 8.10 : Write a script that demonstrate the use of template literals to create adn log strings with embedded variables and multi-line strings

#### Problem 8.11 : Create a script that uses array and object destructuring to extract values and log them

#### Problem 8.12 : Write a script that demonstrate the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments

#### Problem 8.13: Create a script that defines a function with default parameters and logs the results of calling it with different arguments

#### Problem 8.14: Write a script that uses enhanced object literals to create and log an object with methods and computed property names

# Level 9 : Promises and Async/Await

#### Problem 9.1 : Create a promise that resolves with a message after a 2-seconds timeout and log the message to the console

#### Problem 9.2 : Create a promise that rejects with an error message after 2-seconds timeout and handle the error using `.catch`

#### Problem 9.3 : Create a sequence of promises that simulates fetching data from a server. Chain the promise to log messages in a specific order

#### Problem 9.4 : Write an async function that waits for a promise to resolve and then logs the resolved value

#### Problem 9.5 : Write an async function that handles a rejected promise using try-catch and logs the error message

#### Problem 9.6 : Use the fetch API to get data from a public API and logs the response data to the console using promises

#### Problem 9.7 : Use the fetch API to get data from a public API and log the response data to the console using async/await

#### Problem 9.8 : Use Promise.all to wait for multiple promises to resolve and then log all their values

#### Problem 9.9 : Use Promise.race to log the value of the first promise that resolves among multiple promises

#### Problem 9.10 : Write a script that demonstrate creating and handling promises, including both resolved and rejected states.

#### Problem 9.11 : Create a script that chains multiple promises and logs messages in a specific sequence

#### Problem 9.12 : Write a script that uses async/await to handle promises and includes error handling with try-catch

#### Problem 9.13 : Create a script that fetches data from a public API using both promises and async/await and logs the response data

#### Problem 9.14 : Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results

## Level 10 :Error Handling

By the end of this level, you will learn:

- Understand and implement basic error handling using try-catch blocks
- Use finally blocks to execute code regardless of the try catch outcome
- Create and use custom error classes
- Handle errors in promise using `.catch()` and within async function using try-catch
- Implement graceful error handling when making network requests with the fetch API

#### Problem 10.1 : Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console

#### Problem 10.2 : Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error

#### Problem 10.3 : Write a script that includes a try-catch block and a finally block. Log messages in the try, catch and finally blocks to observe the execution flow

#### Problem 10.4 : Create a custom error class that extends the built-In error class. Throw an instance of this custom error in a function and handle it using a try-catch block

#### Problem 10.5 : Write a function that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch block

#### Problem 10.6 : Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console

#### Problem 10.7 : Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects and log the error message

#### Problem 10.8 : Use the fetch API to request data from and invalid URL and handle the error using .catch(). Long an appropriate error message to the console

#### Problem 10.9 : Use the fetch API to request data from an invalid URL within async function and handle the error using try-catch. Log an appropriate error message

#### Problem 10.10 : Write a script that demonstrate basic error handling using try-catch and finally blocks.

#### Problem 10.11 : Create a script that defines and throws custom errors, handling them with try-catch blocks.

#### Problem 10.12 : Write a script that handles errors in promises using .catch() and try-catch within async functions

#### Problem 10.13 : Create a script that handles errors when using the fetch API to request data from invalid URLs

## Level 11 : Modules

By the end of this level, you will learn:

- Create and export functions, objects and constant using modules
- Import modules using named and default imports
- Use Third-party modules installed via npm
- Understand the basics of module bundling(optionals)

#### Problem 11.1 : Create a module that exports a function to add two numbers. Import and use this module in another script

#### Problem 11.2 : Create a module that exports an object representing a person with properties and methods. Import and use this module in another script

#### Problem 11.3 : Create a module that exports multiple functions using named exports. Import and use these functions in another scripts

#### Problem 11.4 : Create a module that exports a single function using default export. Import and use this function in another script

#### Problem 11.5 : Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties

#### Problem 11.6 : Install third party module (e.g. lodash) using npm. Import and use a function from this module in a script

#### Problem 11.7 : Install a third party module(e.g. axios) using npm, Import and use this module to make a network request in a script

#### Problem 11.8 : Use a module bundler like webpack or parcel to bundle multiple JavaScript files into a single file. Write a script to demonstrate the bundling process

#### Problem 11.9: Write a script that creates a module exporting a function and imports it in another script

#### Problem 11.10: Create a script demonstrating both named and default exports and their usage

#### Problem 11.11: Write a script that installs, imports and uses functions from third party modules like lodash and axios (`Third Party Module Script`)

#### Problem 11.12: Create a script demonstrating how to bundle JavaScript files using a module bundler(optional) (`Module Bundling Script`)

# Level 12 :Classes

By the end of this level, you will learn:

- Define and use classes with properties and methods
- Implement inheritance to extend classes
- Utilize static methods and properties
- Apply getters and setters for encapsulation
- Understand and use private fields in classes (optionals)

#### Problem 12.1 : Define a class Person with properties name and age and a method to return greeting message. Create an instance of the class and log the greeting message

#### Problem 12.2: Add a method to the Person class that updates the age property and logs the update age

#### Problem 12.3 : Define a class Student that extends the Person class. Add a property studentId adn a method to return the student ID. Create an instance of the Student class and log the student ID

#### Problem 12.4 : Override the greeting method in the Student class to include the student ID in hte message. Log the overridden greeting message

#### Problem 12.5 : Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.

#### Problem 12.6 : Add a static property the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.

#### Problem 12.7 : Add a getter method to the Person class to return the full name ( assume a firstName and lastName property). Create an instance and log the full name using the getter

#### Problem 12.8 : Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name

#### Problem 12.9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be update through these methods

#### Problem 12.10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation

#### Problem 12.11 : Write a script that defines a Person class with properties and methods, create instances and logs messages

#### Problem 12.11 : Create a script that defines a Student class extending Person, override methods and logs the result

#### Problem 12.12 : Write a script that demonstrate static methods and properties in classes

#### Problem 12.13 : Create a script that uses getters and setters in a class

#### Problem 12.14 : Write a script that defines a class with private fields and methods to manipulate these fields (optionals)

## Level 13 : Closures

By the end of this level, you will learn:

- Understand and create closures in JavaScript
- Use closures to maintain private state and create encapsulated modules
- Apply closures in practical scenarios like generating unique IDs and memoization
- Use closures in loops to capture and use variables correctly.

#### Problem 13.1 : What is closure, why we need it

#### Problem 13.2 : How do you create a closure in JavaScript

#### Problem 13.3 : Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result

#### Problem 13.4: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter

#### Problem 13.5 : Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call

#### Problem 13.6: Create a closure that captures a user's name and returns a function that greets the user by name.

#### Problem 13.7 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index

#### Problem 13.8 : Use closure to create a simple module for managing a collection of items. Implement methods to add, remove and list items

#### Problem 13.9 : Write a function that memoizes the results of another function. Use a closure to store teh results of previous computations

#### Problem 13.10: Create a memoization version of a function that calculates the factorial number

#### Problem 13.11: Write a script that demonstrates a basic closure with a function returning another function that accesses the outer function's variables

#### Problem 13.12: Create a script that uses a closure to maintain a private counter with increment and get functions.

#### Problem 13.13: Write a script that generates unique IDs using a closure to keep track of the last generated ID.

#### Problem 13.14: Create a script that demonstrate closures in loops to ensure functions log the correct index.

#### Problem 13.15: Write a script that memoizes the results of a function and demonstrates it with a factorial calculations.

## Level 14 : Recursion

By the end of this level, you will learn:

- Understand and implement basic recursion.
- Apply recursion to solve problems with array and strings.
- Use recursion for searching and counting elements in arrays.
- Perform tree traversal and calculate tree depth using recursion (optional).

#### Problem 14.1 : Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

#### Problem 14.2 : Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

#### Problem 14.3 : Write a recursive function to find sum of all elements in an array. Log the results for a few test cases.

#### Problem 14.4 : Write a recursive function to find to check if a string is a palindrome. Log the results for a few test cases.

#### Problem 14.5 : Write recursive function to reverse a string. Log the result for a few test cases.

#### Problem 14.6 : Write a recursive function to check if a string is a palindrome. Log the result for a fwe tet cases.

#### Problem 14.7 : Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for few test cases

#### Problem 14.8 : Write a recursive function to count the occurrence of a target element in an array. Log the result for a few test cases

#### Problem 14.9 : Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

#### Problem 14.10 : Write a recursive function to calculate the depth of a binary tree. Log the results for a fwe test cases.

#### Problem 14.11 : Write a script that includes recursive functions to calculate the factorial and fibonacci numbers.

#### Problem 14.12 : Create a script that includes recursive function to find the sum and maximum elements of an array.

#### Problem 14.13 : Write a script that includes recursive functions to reverse a string and check if a string is a palindrome.

#### Problem 14.14 : Create a script that includes recursive functions for binary search and counting occurrences in an array.

#### Problem 14.15 : Write a script that includes recursive functions for in-order traversal and depth calculation of a binary tree(optional)

## Level 15 : Data Structures

By the end of this level, you will learn:

- Implement and use linked list for dynamic data storage
- Use stack for LIFO (Last In First Out) operations and reverse data.
- Use queue for FIFO (First In First Out) operations and simulate real-world scenarios.
- Implement binary trees for hierarchical data storage and traversal
- Understand and use graphs for network representation and pathfinding (optionals).

#### Problem 15.1 : Implement a Node class to represent an element in a linked list with properties values and next.

#### Problem 15.2 : Implement a LinkedList class with method to add node to the end, removed a node from the end, and display all nodes.

#### Problem 15.3 : Implement a stack class with method push (add element), pop(remove element) and peek (view top element).

#### Problem 15.4 : Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off.

#### Problem 15.5 : Implement a Queue class with methods enqueue (add element), and front (view the first element).

#### Problem 15.6 : Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order.

#### Problem 15.7 : Implement a TreeNode class to represent a node in binary tre with properties value,left and right.

#### Problem 15.8 : Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

#### Problem 15.9 : Implement a Graph class with methods to add vertices, add edges and perform a breadth-first search (BFS).

#### Problem 15.10 : Use the Graph class to represent a simple network and perform BFS to find the shortest path between two nodes.

#### Problem 15.11 : Write a script that implements a linked list with methods to add, remove and display notes.

#### Problem 15.12 : Create a script that implements a stack and uses it to reverse a string.

#### Problem 15.13 : Write a script that implements a queue and simulates a printer queue.

#### Problem 15.14 : Create a script that implements a binary tree with insertion and in-order traversal methods

#### Problem 15.15 : Write a script that implements a graph and performs bread-first search(optional)

# Level 16 : Algorithms

By the end of this level, you will learn:

- Implement and understand common sorting algorithms
- Implement and understand common searching algorithms
- Solve string manipulation problems using algorithms.
- Perform array operations using algorithms
- Apply dynamic programming to solve complex problems(optional)

#### Problem 16.1 : Implement a bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

#### Problem 16.2 : Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

#### Problem 16.3 : Implement a quicksort algorithm to sort an array of number in ascending order. Log the sorted array.

#### Problem 16.4 : Implement a linear search algorithm to find a target value in an array. Log the index of the target value.

#### Problem 16.5 : Implement the binary search algorithm to find a target value in sorted array. Log the index of the target value.

#### Problem 16.6 : Write a function to count the occurrence of each character in a string. Log the character counts.

#### Problem 16.7 : Write a function to find the longest substring without repeating characters in a string. Log the length of target value.

#### Problem 16.8 : Write a function to rotate an array by k positions. Log the rotated array.

#### Problem 16.9 : Write a function to merge two sorted array into one sorted array. Loge the merged array.

#### Problem 16.10 : Write a function to solve the Fibonacci sequence using dynamic programming. Log the fibonacci number.

#### Problem 16.11 : Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

#### Problem 16.12 :Write a script that implements bubble sort, selection sort, quicksort algorithm to sort arrays

#### Problem 16.13: Create a script that implements linear search and binary search algorithms to find values in array

#### Problem 16.14: Write a script that counts character occurrences and finds the longest substring without repeating characters

#### Problem 16.15: Write a script that solves the Fibonacci sequence and knapsack problems using dynamic programming(optional)

## Level 17: Basic Regular Expressions

### Problem 17.1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "JavaScript" in a string). Log the matches

### Problem 17.2: Match All Digits

- Write a regular expression to match all digits in a string.
- Log the matches.

### Problem 17.3: Match Words Starting with a Capital Letter

- Write a regular expression to match all words in a string that start with a capital letter.
- Log the matches.

### Problem 17.4: Match Sequences of One or More Digits

- Write a regular expression to match all sequences of one or more digits in a string.
- Log the matches.

### Problem 17.5: Capture US Phone Number Components

- Write a regular expression to capture the area code, central office code, and line number from a US phone number format (e.g., (123) 456-7890).
- Log the captures.

### Problem 17.6: Capture Email Address Components

- Write a regular expression to capture the username and domain from an email address.
- Log the captures.

### Problem 17.7: Match Word at the Beginning of a String

- Write a regular expression to match a word only if it is at the beginning of a string.
- Log the matches.

### Problem 17.8: Match Word at the End of a String

- Write a regular expression to match a word only if it is at the end of a string.
- Log the matches.

### Problem 17.9: Validate a Simple Password

- Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character).
- Log whether the password is valid.

### Problem 17.10: Validate a URL

- Write a regular expression to validate a URL.
- Log whether the URL is valid.

### Problem 17.11: Write a script that uses regular expressions to match simple patterns and log the matches

### Problem 17.12: Create a script that uses regular expressions to match words with specific characteristics and log the matches

### Problem 17.13: Write a script that uses regular expressions to capture parts of a string, such as phone numbers and email addresses, and log the captures

### Problem 17.14: Create a script that uses regular expressions to match words at specific positions in a string and log the matches

### Problem 17.15: Write a script that uses regular expressions to validate passwords and URLs and log whether they are valid

## Level 18: Leetcode problems Part - 1

### Problem 18.1 : Solve the "Two Sum" problem on LeetCode [[link](https://leetcode.com/problems/two-sum/)]

- Write a function that takes an array of numbers and a target number, and returns the indices of the two numbers that add up to the target.
- Log the indices for a few test cases.

### Problem 18.2 : Solve the "Reverse Integer" problem on LeetCode [[link](https://leetcode.com/problems/reverse-integer/description/)]

- Write a function that takes an integer and returns it with its digits reversed.
- Handle edge cases like negative numbers and numbers ending in zero.
- Log the reversed integers for a few test cases.

### Problem 18.3 : Solve the "Palindrome Number" problem on LeetCode [[link](https://leetcode.com/problems/palindrome-number)]

- Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
- Log the result for a few test cases, including edge cases like negative numbers.

### Problem 18.4 : Solve the "Merge Two Sorted Lists" problem on LeetCode [[link](https://leetcode.com/problems/merge-two-sorted-lists)]

- Write a function that takes two sorted linked lists and returns a new sorted list by merging them.
- Create a few test cases with linked lists and log the merged list.

### Problem 18.5: Solve the "Valid Parentheses" problem on LeetCode [[link](https://leetcode.com/problems/valid-parentheses)]

- Write a function that takes a string containing just the characters '(', ')', '{', '}', '[' and ']', and determines if the input string is valid.
- A string is valid if open brackets are closed in the correct order.
- Log the result for a few test cases.

## Level 19: Leetcode problems Part - 2

### Problem 19.1: Solve the "Add Two Numbers" problem on LeetCode [[link](https://leetcode.com/problems/add-two-numbers)]

- Write a function that takes two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each node contains a single digit. Add the two numbers and return the sum as a linked list.
- Create a few test cases with linked lists and log the sum as a linked list.

### Problem 19.2: Solve the "Longest Substring Without Repeating Characters" problem on LeetCode [[link](https://leetcode.com/problems/longest-substring-without-repeating-characters)]

- Write a function that takes a string and returns the length of the longest substring without repeating characters.
- Log the length for a few test cases, including edge cases.

### Problem 19.3: Solve the "Container With Most Water" problem on LeetCode [[link](https://leetcode.com/problems/container-with-most-water)]

- Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point. Find two lines that together with the x-axis form a container, such that the container holds the most water.
- Log the maximum amount of water for a few test cases.

### Problem 19.4: Solve the "3Sum" problem on LeetCode [[link](https://leetcode.com/problems/3sum)]

- Write a function that takes an array of integers and finds all unique triplets in the array which give the sum of zero.
- Log the triplets for a few test cases, including edge cases.

### Problem 19.5: Solve the "Group Anagrams" problem on LeetCode [[link](https://leetcode.com/problems/group-anagrams)]

- Write a function that takes an array of strings and groups anagrams together.
- Log the grouped anagrams for a few test cases.

## Level 20: Leetcode problems Part - 3

### Problem 20.1: Solve the "Median of Two Sorted Arrays" problem on LeetCode. [[link](https://leetcode.com/problems/median-of-two-sorted-arrays)]

- Write a function that takes two sorted arrays of integers and returns the median of the two sorted arrays.
- Log the median for a few test cases, including edge cases.

### Problem 20.2: Solve the "Merge k Sorted Lists" problem on LeetCode. [[link](https://leetcode.com/problems/merge-k-sorted-lists)]

- Write a function that takes an array of k linked lists, each linked list is sorted in ascending order, and merges all the linked lists into one sorted linked list.
- Create a few test cases with linked lists and log the merged list.

### Problem 20.3:Solve the "Trapping Rain Water" problem on LeetCode. [[link](https://leetcode.com/problems/trapping-rain-water)]

- Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
- Log the amount of trapped water for a few test cases.

### Problem 20.4:Solve the "N-Queens" problem on LeetCode. [[link](https://leetcode.com/problems/n-queens)]

- Write a function that places n queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queens puzzle.
- Log the distinct solutions for a few test cases.

### Problem 20.5:: Solve the "Word Ladder" problem on LeetCode. [[link](https://leetcode.com/problems/word-ladder)]

- Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
- Log the length of the shortest transformation sequence for a few test cases.

## Playwright

### Problem 21: List to software required to be installed on your machine to run Playwright

- `NodeJs` : Playwright requires Node.js to be installed on your system. You can downloaded from https://nodejs.org/en
- `Package Manager` : npm(comes with Node.js) or yarn
- `Aqua/IntelliJ/Visual Studio Code` : IDE to write code

### Problem 22: How to install Playwright

- Create a new folder & initialise a Node.js project by running following command:

        `npm init -y`

- This will create a `package.json` file in your folder.
- Install playwright by running following command:

   `npm init playwright@latest`

Above command will create following files in your project

    - playwright.config.ts
    - package.json
    - package-lock.json
    - tests/
      - example.spec.ts
    - tests-examples/
      - demo-todo-app.spec.ts

The `**playwright.config.js/ts**` is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on.

### Problem 23: How to upgrade Playwright

    //Update playwright
    `npm install -D @playwright/test@latest`
    
    //Install new browsers
    `npx playwright install --with-deps`

### Problem 24: List of extension required to setup

### Problem 25: How to do tool setup for Playwright

#### Setting up ESLINT and Prettier for code consistency

##### Why ESLINT

JavaScript is a dynamically typed language, ESLint is linting tool designed to analyse your code, pinpoint issues and guide you in rectifying potential problems in bot JS and TS code.It helps you to ensure coding standard and code quality.

##### Why Prettier

Prettier focuses on maintaining a consistent, unified style throughout your codebase. It enforces code format and takes care of white space, semi colon nuances.

##### Install following dependency in your project

ESLint and TypeScript dependencies
`npm install --save-dev eslint typescript @typescript-eslint/parser @typescript-eslint/eslint-plugin`

Prettier and ESLint Prettier Plugin
`npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier`

Airbnb style guide
`npx install-peerdeps --dev eslint-config-airbnb-base`

    - Create TypeScript configuration file( tsconfig.json)
    - Create an ESLint configuration file(.eslintrc.js)
    - Create a Prettier configuration file(.prettierrc)

##### Managing Environment Variables

In an automation framework, setting variables at the operating system level - known as environment variables, provides flexibility to test application in different env like from development (DEV), SIT to Production (PROD). It is important to store environment specific values such as the baseUrl in a centralised location. In JavaScript world, the go to solution is .env file. Dotenv, a Node.js library simplifies the loading and management of environment variables. By storing configuration details in the .env file, you can create a centralised repository for environment specific values, streamlining configuration changes across different testing stages.

    - Create an `./environment` folder at the root level
    - Create a `[environment name].env` file for each deployment stage
    - Set a new `NODE_ENV` environment variables on your local machine
    - Update `playwright.config.ts` to load environment variables (below is sample code)
    
    
    // playwright.config.ts
    import * as dotenv from 'dotenv';
    switch(process.env.NODE_ENV){
    case 'local': dotenv.config({path: './environments/local.env'}); break;
    case 'dev': dotenv.config({path: './environments/dev.env'}); break;
    case 'qa': dotenv.config({path: './environments/qa.env'}); break;
    default: dotenv.config({path: './environments/qa.env'});
    }

##### Add scripts in the package.json to run tests in needed environments

    // package.json
    
    "scripts": {
    // ...
    "test": "echo %NODE_ENV% && npx playwright test",
    "test:local": "cross-env NODE_ENV='local' npm run test",
    "test:dev": "cross-env NODE_ENV='dev' npm run test",
    "test:qa": "cross-env NODE_ENV='qa' npm run test",
    // ...
    }

### Problem 26: How to create a test file and write tests?

In your project directory, create a file named `firstTestFile.spec.ts/js` file inside `tests` directory.

    //firstTestFile.spec.ts
    import { test, expect } from "@playwright/test";
    
    test("First Test", async ({ page }) => {
    //Navigate to https://google.co.in
    await page.goto("https://google.co.in");
    
    //Fetch page title
    const title = await page.title();
    
    //Print title on console log
    console.log(`Page Title : ${title} `);
    });

### Problem 27: How to run test?

    //You can specify exact test file to run
    `npx playwright test ./tests/firstTestFile.test.js`
    Or
    //playwright will automatically find tests
    `npx playwright test`

### Problem 27: How to run test in UI mode?

    //Starts the interactive UI mode.
    `npx playwright test --ui`

### How to see Playwright execution report

    `npx playwright show-report`

### Problem 27: How to check version of Playwright?

`npx playwright --version`

### Problem 27: How to debug tests?

      //Runs the tests in debug mode.
    `npx playwright test --debug`

### Problem 28: What is playwright codegen?

    `npx playwright codegen` Auto generate tests with Codegen.

### Problem 29: What is playwright inspector?

### Problem 30: How to launch browser (Chrome/Edge/Firefox/Safari)

### Problem 31: How to launch browser based on config value

### Problem 32: How to load URL in browser

### Problem 33: How to minimize, maximize and close the browser

### Problem 34: How to launch multiple browser in single test

### Problem 34: How to take screenshot of page

    test("Launch twitter and take screenshot", async ({ page }) => {
    await page.goto("https://x.com/i/flow/login");
    
    //capture a screenshot of the page
    await page.screenshot({ path: "screenshot.png" });
    });

### Problem 34: How to take screenshot of an element of page

To capture a screenshot of a specific element, first select the element and then use element.screenshot() method:

    test("Take screenshot of an element", async ({ page }) => {
    await page.goto("https://x.com/i/flow/login");
    
    const element = page.locator("h1");
    
    //capture a screenshot of the element
    await element.screenshot({ path: "screenshot.png" });
    });

### Problem 34: How to take screenshot of full page

Sometimes, you may need to capture the entire scrollable content of a page. You need to pass the fullPage flag.

      test("Launch twitter and take screenshot", async ({ page }) => {
      await page.goto("https://x.com/i/flow/login");
    
      //capture a screenshot of the page
      await page.screenshot({ path: "screenshot.png", fullPage: true });
      });

### Problem 35: How to clip screenshot

If your requirement is to capture a specific region of page, use the clip option to define the region’s coordinates and dimensions.

      test("Launch twitter and take screenshot", async ({ page }) => {
      await page.goto("https://x.com/i/flow/login");
    
      //capture a clipped screenshot
      await page.screenshot({
        path: "screenshot.png",
        clip: { x: 0, y: 0, width: 800, height: 800 },
        });
    });

### How to configuring Screenshots Options

Playwright allows for additional configuration options to fine tune your screenshots.
`Type`: Specify the image format(png or jpeg)
`Quality`: Set the quality of JPEG images(1-100)
`Omit Background`: Capture screenshots with a transparent background.

    test("Launch twitter and take screenshot", async ({ page }) => {
      await page.goto("https://x.com/i/flow/login");
    
    
      //capture a screenshot of the page
        await page.screenshot({
          path: "screenshot.jpg",
          type: "jpeg",
          quality: 80,
          omitBackground: true,
        });
    });

### Problem 35: How to perform operation on multiple browser

### Problem 36: How to find element

### Problem 37: What are different locator in playwright

### Problem 38: How to apply custom delay or wait

### Problem 39: How to perform operation on HTML element

### Problem 40: How to read browser console log

### Problem 41: How to read network tabs values

### Problem 42: How to track API calls and their status (status code, request, response) while page is loading

### Problem 43: How to list all API called and capture details when test failed

### Problem 44: How to save browser session details

### Problem 45: How to run data driven test

### Problem 46: What are different annotation in Playwright

### Problem 47: How to use different annotation in Playwright

### Problem 48: How to hit an API in Playwright, verify status code and work on JSON response

### Problem 49: How to hit a GET request using Playwright

### Problem 50: How to hit a POST request using Playwright

### Problem 51: How to hit a DELETE request using Playwright

### Problem 52: How to hit a PUT request using Playwright

### Problem 53: How to hit a PATCH request using Playwright

### Problem 54: How to hit multiple API in a test and use first API respone value in second API

### Problem 55: How to use API and browser action in single test

### Problem 56: What are different reporting available in Playwright

### Problem 57: What is Sharding

### Problem 58: How to run test script on Azure services

### Problem 59: How to generate log file in a Playwright test

### Problem 60: How to intercept API call using Playwright

### Problem 61: How to mock API request using Playwright

### Problem 62: How to modify API response using Playwright

### Problem 63: How to club multiple test in single feature

`

`
