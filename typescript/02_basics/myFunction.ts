// function params type & default value
function addTwo(num: number) {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {};

loginUser("Abhay", "ab@ab.com");

signUpUser("hitesh", "22", false);
let myVal = addTwo(5);
console.log(getUpper("123"));

//function return value typechecking, add : type after function params to enforce return type check
function addTwoWithReturnTypeCheck(num: number): number {
  //return "hello";
  return num + 2;
}

//return different data type from single function
function getValu(myVal: number) {
  if (myVal > 5) {
    return true;
  }
  return "200 OK";
}

//adding return type check in arrow function
const getHello = (s: string): string => {
  console.log("hello");
  return "hello";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero) => {
  return `hero is ${hero}`;
});

const heros2 = [1, 2, "ironman"];
heros2.map((hero2) => {
  return `hero2 is ${hero2}`;
});

function consoleError(errMsg: string) {
  console.log(errMsg);
}

//never type  - means function will never return anything. This sort of syntax is used for throwing error or crash.
function handleError(errMsg: string): never {
  throw new Error(errMsg);
}
export {};
