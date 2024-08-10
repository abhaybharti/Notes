//ES6 + Features

// ## Task Activities

// ### Activity 1: Template Literals

// #### Task 1 : Use Template literals to create a string that includes variables for a person's name and age, and log the string to the console
let name = "Abhay";
let age = 30;
console.log(`${name} : ${age}`);

// #### Task 2 : Create a multi line string using template literals and log it to console
let multiLineString = `1. First Name : Abhay
2. Last Name : Bharti`;
console.log(`${multiLineString}`);
// ### Activity 2: Destructing

// #### Task 3 : Use array destructuring to extract the first and second elements from an array of numbers and log them to console

const arrayExample = [1, 2, 3, 4, 5, 6];
const [firstValue, secondValue] = arrayExample;
console.log(firstValue);
console.log(secondValue);
// #### Task 4 : Use Object destructuring to extract the title and author from a book object and log them to the console

const Book = {
  author: "Abhay",
  book: "JavaScript",
};

const { author, book } = Book;
console.log(author);
console.log(book);
// ### Activity 3: Spread and Rest operator

// #### Task 5 : Use the spread operator to create a new array that includes all elements of an existing array plus additional elements and log the new array to the console
const firstArray = [1, 2, 3];
const newArray = [...firstArray, 50, 60];
console.log(newArray);

// #### Task 6 : Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result
function sum(...number) {
  return number.reduce((total, element) => {
    return (total += element);
  }, 0);
}
console.log("Sum : ", sum(1, 2, 3, 4));
// ### Activity 4: Default Parameters

// #### Task 7 : Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without teh second parameters
function sumOfTwo(first, second = 1) {
  return first + second;
}
console.log("Sum of Two : ", sumOfTwo(10, 5));
console.log("Sum of Two : ", sumOfTwo(10));
// ### Activity 5: Enhanced Object Literals

// #### Task 8 : Use enhanced object literals to create an object with methods and properties and log the object to the console
let authorFullName = "Abhay Bharti";
let bookName = "Playwright using JavaScript";
let year = 2024;

let libraryBook = {
  // Shorthand property names (when key and variable name are the same)
  authorFullName,
  bookName,
  year,
  //Method definition shorthand
  getSummary() {
    return `${authorFullName} wrote ${bookName} in ${year}`;
  },
};

console.log("libraryBook : ", libraryBook);
console.log("libraryBook : ", libraryBook.getSummary());

// #### Task 9 : Create an object with computed property names based on variables and log the object to the console
libraryBook = {
  // Shorthand property names (when key and variable name are the same)
  authorFullName,
  bookName,
  year,
  //Method definition shorthand
  getSummary() {
    return `${authorFullName} wrote ${bookName} in ${year}`;
  },

  // Computed property name
  ["isOldBook"]: function () {
    return this.year < 2015;
  },
};

console.log("libraryBook2 : ", libraryBook.getSummary());
console.log("libraryBook2 : ", libraryBook.isOldBook());
// ## Feature Request:

// 1. `Template Literals Script`: Write a script that demonstrate the use of template literals to create adn log strings with embedded variables and multi-line strings
// 2. `Destructuring Script`: Create a script that uses array and object destructuring to extract values and log them
// 3. `Spread and Rest Operator Script`: Write a script that demonstrate the use of the spread operator to combine arrays adn the rest operator to handle multiple function arguments
// 4. `Default Parameters Script`: Create a script that defines a function with default parameters and logs the results of calling it with different arguments
// 5. `Enhanced Object Literals Script`: Write a script that uses enhanced object literals to create and log an object with methods and computed property names
