//Array
// const superHeros = [];
// superHeros.push("spiderman"); //wont allow to add value reason superHeros has type never

//correct way to define array in typescript
const superHeros: string[] = [];
superHeros.push("spiderman");
superHeros.push("Thor");
superHeros.push("IronMan");
console.log(superHeros);

//number array
const heroPower: Array<number> = [];
heroPower.push(2);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "", isActive: true }); //adding value to array

//Array inside Array or multi dimensional array
const MLModels: number[][] = [[255, 255, 255]];

//To Do how to define array  which allows string as well as number
