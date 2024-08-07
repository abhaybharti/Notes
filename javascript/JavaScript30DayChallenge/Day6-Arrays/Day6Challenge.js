// Day 6 : Arrays

// Task/Activities

// Activity 1 : Array of Creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console
let numberArray5 = [1, 2, 3, 4, 5];
for (let iLoop = 0; iLoop < numberArray5.length; iLoop++) {
  console.log(numberArray5[iLoop]);
}

// #### Task 2 : Access the first and last elements of the array and log them to the console
console.log(numberArray5[0]);
console.log(numberArray5[4]);

// ### Activity 2 : Array Methods (Basic)

// #### Task 3 : Use the push method to add a new number to the end of the array and log the updated array
numberArray5.push(6);
console.log("push -> ", numberArray5);
// #### Task 4 : Use the pop method to remove the last element from the array and log the updated array
let temp = numberArray5.pop();
console.log("pop -> ", numberArray5);
console.log("pop -> ", temp);

// #### Task 5 : Use the shift method to remove the first element from the array and log the updated array
temp = numberArray5.shift();
console.log("shift -> ", numberArray5);
console.log("shift -> ", temp);

// #### Task 6 : Use the unshift method to add a new number to the beginning of the array and log the update array
temp = numberArray5.unshift(10);
console.log("unshift -> ", numberArray5);
console.log("unshift -> ", temp);

// ### Activity 3 : Array Methods (Intermediate)

// #### Task 7 : Use the map method to create a new array where each number is doubled and log the new array
numberArray5 = numberArray5.map((ele) => {
  return ele * 2;
});
console.log("map -> ", numberArray5);
// #### Task 8 : Use the filter method to create a new array with only even number and log the new array
numberArray5 = numberArray5.filter((ele) => {
  return ele % 2 === 0;
});
console.log("filter -> ", numberArray5);
// #### Task 9 : Use the reduce method to calculate the sum of all numbers in the array and log the results

let sumOfAll = numberArray5.reduce((accumulator, ele) => {
  return (accumulator += ele);
}, 0);
console.log("reduce -> ", sumOfAll);

// ### Activity 4 : Array Iteration

// #### Task 10 : Use a for loop to iterate over the array and log each element to console
console.log("For Loop to iterate array");
for (let iLoop = 0; iLoop < numberArray5.length; iLoop++) {
  console.log(numberArray5[iLoop]);
}

// #### Task 11 : Use the forEach method to iterate over array and log each element to the console
console.log("ForEach to iterate array");
numberArray5.forEach((ele) => {
  console.log(ele);
});

// ### Activity 5 : Multi-Dimension Array

// #### Task 12 : Create a two dimensional array (matrix) and the entire array to the console
console.log("MultiDimesional Array ");
let multiDimensionalArray = [
  [1, 2],
  [3, 4],
];

multiDimensionalArray.forEach((ele) => {
  ele.forEach((childEle) => {
    console.log(childEle);
  });
});

// #### Task 13 : Access and Log a specific element from the two dimensional array
console.log("multiDimensionalArray -> ", multiDimensionalArray[0][1]);
