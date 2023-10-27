//comparision of same data type is straight forward
console.log(2>1);
console.log(2 >=1);

//problem arises when you compare two different data types
console.log("2">1);
console.log("02">1);
console.log("02">2); // always convert data into same data type

console.log("=====null comparision -- should avoid this type of conversion ======");
console.log(null >0);
console.log(null === 0);
console.log(null >=0); // The reason is that an equality check == and comparisions >< >= <= works differently. Comparisions convert null to a number, treating it as 0. Thats why null >=0 is true and null > 0 is false

console.log("=====undefined comparision -- should avoid this type of conversion ======");
console.log(undefined >0);
console.log(undefined == 0);
console.log(undefined >=0); // always returns false


//Query -> Comparision & Equality works differently
// === checks strict comparision