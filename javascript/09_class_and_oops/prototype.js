let myName = "Abhay     ";
console.log(myName.length);

let myHeroes = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

//added a new property in Object, now this is available in all objects/array
Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all object`);
};
heroPower.hitesh();
myHeroes.hitesh();

Array.prototype.heyHitesh = function () {
  console.log(`Hitesh says hello`);
};
myHeroes.heyHitesh();
//heroPower.heyHitesh();  heyHitesh is defined at array level, can't be accessed at object level

//inheritance

const user = {
  name: "chai",
  email: "chai@gmail.com",
};
const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};
const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

//Teacher.__proto__ = User; //old/outdated approach

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "ChaiAutCode      ";
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is : ${this.trim().length}`);
};
anotherUserName.trueLength();
"abhay".trueLength();
