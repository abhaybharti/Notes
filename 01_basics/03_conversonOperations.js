let score = "abh";
console.log(typeof score);
console.log(typeof(score));
let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

//"33" => 33 can be converted easily
//"33abc" => NaN (Not a number), typeof returns number for this
//true => 1; false =>0

let isLoggedIn = "Abhay";
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
console.log(typeof booleanIsLoggedIn);

//1  in Boolean is => true
//0 in Boolean is => false
//"Abhay" in Boolean is => true

let someNumber = 33;
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
