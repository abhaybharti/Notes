console.log("Day 3 : - Control Structure");
console.log("Task / Activities");
console.log("Activities 1 : if-Else statements");
console.log("Task 1");

function checkNumberIsGreaterThanZero(number) {
  if (number === 0) {
    console.log(`${number} is zero`);
  }
  if (number < 0) {
    console.log(`${number} is negative`);
  }
  if (number > 0) {
    console.log(`${number} is positive`);
  }
}

checkNumberIsGreaterThanZero(0);
checkNumberIsGreaterThanZero(5);
checkNumberIsGreaterThanZero(-1);
checkNumberIsGreaterThanZero("ABC");
