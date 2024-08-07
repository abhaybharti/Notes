//  Day 7 : Objects

//  Task/Activities

//  Activity 1 : Object of Creation and Access

//  Task 1 : Create an object representing a book with properties like title, author and year and log the object to the console
let book = {
  title: "JavaScript Code",
  author: "Abhay Bharti",
  year: 2024,
};
console.log(book);

//  Task 2 : Access and log the title and author properties of book object
console.log(book.title);
console.log(book.author);

//  Activity 2 : Object Methods

//  Task 3 : Add a method to the book object that returns a string with the book's title and author and log the result of calling this method.
book = {
  title: "JavaScript Code",
  author: "Abhay Bharti",
  year: 2024,
  //method to return a string with books title and author
  getTtitleAndAuthor() {
    return `${this.title} by ${this.author}`;
  },
};
console.log(book);
const titleAuthor = book.getTtitleAndAuthor();
console.log(titleAuthor);

//  Task 4 : Add a method to the book object that takes a parameter (Year) and updates the book's year property, then log the updated object
console.log("Task 4");
book = {
  title: "JavaScript Code",
  author: "Abhay Bharti",
  year: 2024,
  //method to return a string with books title and author
  newYear(newYear) {
    this.year = newYear;
  },
};
console.log(book);
book.newYear(2025);
console.log(book);

//  Activity 3 : Nested Objects

//  Task 5 : Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console
console.log("Task 5");
const library = {
  name: "AB Library",
  books: [
    { title: "JavaScript", author: "A B" },
    { title: "Betal Pachisi", author: "Abhay" },
  ],
};
console.log(library);
//  Task 6 : Access and log the name of the library and the titles of all the books in the library
console.log("Task 6");
console.log(library.name);

//log the title of all books in the library
library.books.forEach((book) => {
  console.log(book.title);
});

//  Activity 4 : The this keyword

//  Task 7 : Add a method to the book object that uses the this keyword to return a string with book's title and year and log the result of calling this method
console.log("Task 7");
let bookInTask7 = {
  title: "JavaScript Code",
  author: "Abhay Bharti",
  year: 2024,
  //method to use this keyword and
  getTitle() {
    return `${this.title}`;
  },
};
console.log(bookInTask7.getTitle());

//  Activity 5 : Object Iteration

//  Task 8 : Use a for...in loop to iterate over the properties of the book object and log each property and its value
console.log("Task 8");
for (const prop in book) {
  console.log(`${prop} : ${book[prop]} `);
}

console.log("Task 8 part -2 ");

if (library.books) {
  for (const book of library.books) {
    for (const key in book) {
      console.log(`${key} : ${book[key]}`);
    }
  }
}
//  Task 9 : Use Object.keys and Object.values method a log all the keys and values of the book object.
console.log("Task 9");
library.books.forEach((book) => {
  console.log(`keys : ${Object.keys(book)}`);
  console.log(`values : ${Object.values(book)}`);
});

//  Feature Request

//  1. Book Object Script : Write a script that creates a book object, adds method to it and logs its properties and method results

//  2. Library Object Script : Write a script that defines a library object containing and arrya of book objects and logs the library's details

//  3. Object Iteration Script : Write a script that demonstrates iterating over an object's properties using for...in loop and Object.keys/Object.values
