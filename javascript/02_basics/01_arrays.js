/*The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.

arrays aren't primitives but are instead Array objects:

1. arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
2. arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
3. arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
4. array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
*/
// const myArray = [1,2,3,4,true,"ABhay"];
// console.log(myArray);

const myHeroes = new Array("C","A","B","D");
// console.log(myHeroes);

//Array Methods
// myHeroes.push("Dhruva"); //adds at the start of array
// console.log(myHeroes);
// myHeroes.pop(); //removes from end of array
// console.log(myHeroes);

// myHeroes.unshift("Start"); //adds at the beginning of array
// console.log(myHeroes);
// myHeroes.shift(); //removes element from start of array
console.log(myHeroes);
console.log(myHeroes.includes("A")); //returns true if element is found else false
console.log(myHeroes.indexOf("B")); //returns index else -1 if element is not found
console.log('Sort array values : ',myHeroes.sort()); //sort array values
console.log('Convert array to String : ',myHeroes.toString()); //convert array to string values

const newArra = myHeroes.join();
console.log(newArra ); //converts array to comma seperate string value. typeof newArra is `string`