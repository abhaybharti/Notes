//slice & splice
//slice fetches element from array, does not include last range value, does not modify original array
//code exmple
const myArray = [0,1,2,3,4,5,6];
const b = myArray.slice(1,3);
console.log("Orignal Array after slice : ",myArray);
console.log(b);

//splice fetches element from array, includes last range, also modifies original array
const c = myArray.splice(1,3);
console.log("original array after splice : ",myArray);
console.log(c);

//push and concat example
const marvelHeroes = ["Thor", "IronMan"];
const marvelHeroes2 = ["Thor", "Zorawar"];
const DCHeroes = ["Spiderman","Batman"];
const DCHeroes2 = ["Spiderman","Batman"];
marvelHeroes.push(DCHeroes); // adds second array as child array, does not merge two array. modifies original array
console.log(marvelHeroes);

const newarray = marvelHeroes2.concat(DCHeroes2); //merges two arrays, return a new array, does not modify original array
console.log("Merge Array Using concat Operator : ",newarray);

//conact method is not much used, a better approach is using spread operator
const newArrayUsingSpread = [...marvelHeroes2,...DCHeroes2];
console.log("Merge Array Using Spread Operator : ",newArrayUsingSpread);

//How to flat an array
const anArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const flatArray =anArray.flat(Infinity); // flatten the array till inifinite hierarchy or flatten the arrays into single array
console.log("Flatten the array : ",flatArray);

//How to check if array
console.log("isArray : ",Array.isArray("AB"));
console.log("isArray : ",Array.isArray(flatArray));

//Converts String to array
console.log("Converts String to array : ",Array.from("AB"));

//Converts variables to array
let s1 = 300;
let s2 = 400;
let s3 = 500;
console.log("Converts varaible to array : ",Array.of(s1,s2,s3));

// To DO -- read more about array methods