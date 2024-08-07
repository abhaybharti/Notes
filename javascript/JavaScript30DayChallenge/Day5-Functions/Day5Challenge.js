console.log("Day 5 : Functions");
console.log("Task / Activities");
console.log("Activity 1 : Function Declaration");
console.log("Task 1");

//This approach of writing function is called as function declaration
function findOddEven(number) {
  if (number % 2 === 0) {
    console.log(${number} is even);
  } else {
    console.log(${number} is odd);
  }
}

findOddEven(20);
findOddEven(19);

console.log("Task 2");
function calculateSquare(number) {
  return number * number;
}

console.log(calculateSquare(5));
console.log(calculateSquare(10));

console.log("Activity 2 : Function Expression");
console.log("Task 3");

const maxNumber = function (first, second) {
  return first > second ? first : second;
};

console.log(maxNumber(10, 20));
console.log(maxNumber(30, 20));

console.log("Task 4");
const joinTwoString = function (first, second) {
  return first + second;
};

console.log(joinTwoString("Ab", "Bh"));
console.log(joinTwoString("BH", "ART"));

console.log("Activity 3 : Arrow Functions");
console.log("Task 5");

const sumOfTwoNumber = (first, second) => {
  return first + second;
};

console.log(sumOfTwoNumber(10, 11));

console.log("Task 6");

const checkStringValue = (first, toContain) => {
  if (first.includes(toContain)) {
    return true;
  }
  return false;
};

console.log(checkStringValue("Abhay", "A"));

console.log("Activity 4 : Function Parameters and Default Values");
console.log("Task 7");

function multiplyTwoNum(first, second = 3) {
  return first * second;
}

console.log(multiplyTwoNum(10, 5));
console.log(multiplyTwoNum(10));

console.log("Task 8");
function greetMessage(name, age = 20) {
  return Hello ${name} and age : ${age};
}

console.log(greetMessage("Abhay", 40));
console.log(greetMessage("Abhay"));

console.log("Activity 5 : Higher Order Functions");
console.log("Task 9");

// In JavaScript, a higher-order function is a function that can accept other functions as arguments, return functions, or both. They enable abstraction, composition, and the creation of more flexible and reusable code.

// More Read - https://www.geeksforgeeks.org/javascript-higher-order-functions/
function higherOrderFunction(callback, num) {
  for (let i = 0; i < num; i++) {
    //call the callback function
    callback();
  }
}

function callBackFunction() {
  console.log("Callback function is executed");
}

// Passing the callback function to the higher-order function
higherOrderFunction(callBackFunction, 5);

console.log("Task 10");
//TBD