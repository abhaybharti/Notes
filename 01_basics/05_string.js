const name = "Abhay"
const repoCount = 50;
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is called string interpolation, it allows to add methods like ${name.ToUppercase()}

const gameName = new String('Abhay Name'); //another way to declare string
console.log(gameName);
console.log(gameName[1]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('A'));
console.log(gameName.substring(0,4));
console.log(gameName.slice(-3));
console.log(gameName.trim());
console.log(gameName.replace('A','T'));

//To Do - write a blog about string operation method