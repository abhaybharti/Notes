//Activity 1 -> Task 1
function addTwoNumber(first, second) {
  //check argument is valid number
  if (first && second) {
    console.log(first + second);
  } else {
    console.log("Not valid number");
  }
}

addTwoNumber(10, 20);
addTwoNumber(10);
addTwoNumber("ABC");

//Activity 1 -> Task 2
function subtractTwoNumber(first, second) {
  if (!first && !second && isNaN(first) && isNaN(second)) {
    console.log(first - second);
  }
}

subtractTwoNumber(10, 20);

//Activity 1 -> Task 3
function multiplyTwoNumber(first, second) {
  if (!first && !second && isNaN(first) && isNaN(second)) {
    console.log(first * second);
  }
}

multiplyTwoNumber(10, 20);

//Activity 1 -> Task 4
function divideTwoNumber(first, second) {
  if (!first && !second && isNaN(first) && isNaN(second)) {
    console.log(first / second);
  }
}

divideTwoNumber(10, 20);

//Activity 1 -> Task 5
function findRemainder(first, second) {
  if (!first && !second && isNaN(first) && isNaN(second)) {
    if (first % second !== 0) {
      console.log(first % second);
    }
  }
}

findRemainder(103, 20);
