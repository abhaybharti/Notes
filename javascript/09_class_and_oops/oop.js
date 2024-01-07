//what is object literal
const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,
  getUserDetail: function () {
    //console.log("Got user details from database");
    //console.log(`UserName : ${this.username}`);
    console.log(this);
  },
};
// console.log(user.loginCount);
// console.log(user.getUserDetail());
//console.log(this); // {}

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this; //not mandatory to write this. JavaScript implicitly returns
}

//new keyword generates a new empty  object
const userOne = new User("Abhay", 12, true);
const userTwo = new User("Ajay", 8, true);
console.log(userOne.constructor);
console.log(userOne instanceof User); //return true
// console.log(userTwo);
//Prototypal inheritance
