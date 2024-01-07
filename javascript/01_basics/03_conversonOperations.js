let score = "abh";
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

//"33" => 33 can be converted easily
//"33abc" => NaN (Not a number), typeof returns number for this
//true => 1; false =>0

let isLoggedIn = "Abhay";
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// console.log(typeof booleanIsLoggedIn);

//1  in Boolean is => true
//0 in Boolean is => false
//"Abhay" in Boolean is => true

let someNumber = 33;
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

//********Operations ************
let value =3;
let negValue = -value;
// console.log(negValue);

let str1 ="1"
let str2 = 2
console.log("1"+2);
console.log(1+"2");
console.log("1"+2+2);
console.log(1+2+"2");
console.log(+true); //senseless code
console.log(+""); //senseless code

let num1, num2, num3; 
num1 = num2=num3 = 2+2; //not a good way to write code, foremost focus should be on readability

let gameCounter = 100;
++gameCounter;
console.log(++gameCounter); //prefix operator, increases value then print
console.log(gameCounter++); //postfix operation, prints and then increases values