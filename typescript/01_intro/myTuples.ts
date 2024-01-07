//a kind of specialized array

const user: (string | number)[] = [1, "hc"];

//tuple restricts you to values should be put in same sequence as they are declared and also number of values.
const userTuple: [string, number, boolean] = ["hc", 1, true];

let rgb: [number, number, number] = [255, 123, 112];

type User = [number, string];

const newUser: User = [334, "pari@email.com"];
newUser[1] = "hc@com";

export {};
