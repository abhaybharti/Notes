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
console.log(newarray);

