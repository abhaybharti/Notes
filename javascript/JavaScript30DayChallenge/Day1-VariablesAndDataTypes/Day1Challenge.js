// Activity 1
//Tasks 1:
console.log("Activity 1 -> Task 1 start ");
var firstName = 45;
console.log(firstName);

//Task 2:
console.log("Activity 1 -> Task 2 start ");
let secondName = "B";
console.log(secondName);

//Activity 2:
console.log("Activity 2 -> Task 3 start ");
const fullName = true;
console.log(fullName);

//Activity 3:
console.log("Activity 3 -> Task 4 start ");
let year = 2024;
let countryName = "Bharat";
let isDemocracy = true;
let stateCapital = {
  karnataka: "Bangalore",
  Delhi: "Delhi",
};
let arrayOfName = ["AB", "SS", "PT"];

console.log("type of year (Number) : ", typeof year);
console.log("type of countryName (String) : ", typeof countryName);
console.log("type of isDemocracy (boolean) : ", typeof isDemocracy);
console.log("type of stateCapital (object) : ", typeof stateCapital);
console.log("type of arrayOfName (array) : ", typeof arrayOfName);

//Activity 4:
console.log("Activity 4 -> Task 5 start ");
let age = 30;
console.log(age);
age = 20;
console.log(age);

//Activity 5:
console.log("Activity 5 -> Task 6 start ");
const statusOfDayTask = "Done";
console.log(stateCapital);
// statusOfDayTask = "Not";

//feature 1:

function printVarType(...arguments) {
  const arr = [];
  if (Array.isArray(arguments[0])) {
    arguments[0].forEach((arg) => {
      arr.push({ "Variable value ": arg, "type of variable is ": typeof arg });
    });
  } else {
    arguments.forEach((arg) => {
      arr.push({ "Variable value ": arg, "type of variable is ": typeof arg });
    });
  }
  console.table(arr);
}

printVarType([year, countryName, stateCapital, arrayOfName, isDemocracy]);

function printLetConstAssignmentDifference() {
  let letVar = "Assignment with let";
  try {
    letVar = "reassignment with let";
    console.warn(letVar);
  } catch (error) {
    console.error(letVar);
  }

  const constVar = "Assignment with const";
  try {
    constVar = "reassignment with const";
    console.warn(constVar);
  } catch (error) {
    console.error(error);
  }
}
printLetConstAssignmentDifference();
