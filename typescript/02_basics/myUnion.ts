//declare score variable which accepts number as well as string value
let score: number | string = 33;

score = 44;
score = "No Value";
console.log(score);

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

//declaring object of type User or Admin and assigning value of type User
let hitesh: User | Admin = {
  name: "hitesh",
  id: 334,
};

//assigning value of type Admin to hitesh
hitesh = { username: "Abhay", id: 334 };

function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  } else {
    id = id + 2;
  }

  //making some API calls
  console.log(`Db id is ${id}`);
}

getDbId(3);
getDbId("3");

//array
const data: number[] = [1, 2, 3]; // number array
const data2: string[] = ["1", "2", "3", "4"]; // string array
const data3: string[] | number[] = ["1", "2", "3"]; //At at time it can have either string array or number array, can't have both type of values
const data4: (string | number)[] = ["1", "2", "3", 4]; //string or number array, can store string or number at the same time.
const data5: (string | number | boolean)[] = ["1", "2", "3", 4, true]; //string or number array, can store string or number at the same time.
// Tips - avoid using Any

let pi: 3.14 = 3.14; //you can fix the value , new value can't be assigned
//pi = 3.56;

//practical example
let seatAllottment: "aisle" | "middle" | "window"; //only these three values can be assigned
seatAllottment = "aisle"; //allowed
//seatAllottment = "aisle1"; //not allowed

export {};
