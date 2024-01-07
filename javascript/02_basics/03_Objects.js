//singleton -> constructor will create singleton object. 


//Object literals -> when we create object using literals it will not be singleton
const jsUser = {
    name:"Abhay",
    age: 18,
    "full name":"A B"
}

console.log(jsUser.name);
console.log(jsUser["name"]);
console.log(jsUser["full name"]);

//Update value
jsUser.name="Pari";
console.log(jsUser["name"]);

Object.freeze(jsUser); //You can freeze an object, once freezed, value can't be changed

jsUser["name"]="Shanvi";
console.log(jsUser["name"]);


//How to assign and access Symbol
const mySymbol1 = Symbol("key1");
const jsUserWithSymbol = {
    name:"Abhay",
    [mySymbol1]:"key1",
    age: 18,
    "full name":"A B"    
}
console.log(jsUserWithSymbol);

jsUserWithSymbol.greeting = function(){
    console.log("Hello AB");
}
console.log(jsUserWithSymbol.greeting());

jsUserWithSymbol.greeting2 = function(){
    console.log(`Hello JS User , ${this.name}`);
}

console.log(jsUserWithSymbol.greeting2());