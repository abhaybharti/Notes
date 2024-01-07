//Tuple types are type of array of known length and where different elements may have different types. A value of type [number,string] is
//guaranteed to have a length of 2, with a number at element 0 and  a string at element 1.
//TypeScript allows you to call methods like push(), pop(), shift(), unshift(), and slice() on values of tuple, when such methods
//generally destroy the supposed guarantees of tuple types.

const user: (string | number)[] = [1, "hc"];

//tuple restricts you to values should be put in same sequence as they are declared and also number of values.
const userTuple: [string, number, boolean] = ["hc", 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [334, "pari@email.com"];
newUser[1] = "hc@com";
newUser.push("ABC"); //dangerous code

//ENUMS


export {};
