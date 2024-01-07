const td = new Object(); //This is a singleton, object is same as created in 03_Objects.js file. Only difference is singleton
console.log(td);

const regulatedUser = {
    email:"abc@hotmail.com",
    fullname:{
        userfullName:{
            "firstname":"Abhay",
            "secondname":"Bharti"
        }
    }
}

// console.log(regulatedUser);

// console.log(regulatedUser.fullname.userfullName.firstname);

//Optional chaining -- The optional chaining (?.) operator accesses an object's property or calls a function. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

// console.log(regulatedUser?.fullname?.userfullName?.firstname);

const o1 = {1:"a",2:"b"};
const o2 = {3:"c",4:"d"};

const o3 = {o1,o2}; //This creates object inside object
// console.log(o3);

//Object.Assign
const o4 = Object.assign(o1,o2); //will merge two object and return a new object
// console.log("Using Object.assign Operator : ",o4);

//Better way to do merge two object is spread opertor
const o5 = {...o1,...o2};
// console.log("Using Spread Operator : ",o5);

// console.log(Object.keys(o1)); //returns key of object
// console.log(Object.values(o1)); //retuns value of object
// console.log(Object.entries(o1)); //retuns array of key/value pair

//hasOwnProperty method returns true if key exists else false
// console.log(o1.hasOwnProperty('1')); //return true 
// console.log(o1.hasOwnProperty('A')); //return false

//Destructuring Of Objects

const course = {
    name:"Java",
    price: 400
}

//access value of an Object property using object name.property name
console.log(course.price); 
const {price} = course;
console.log("price : ",price); //access value after object destructuring
const {name:n}=course; //can assign a new name at the time of destructuring
console.log(n);

//Object desctructuring is useful when passing props to React component

//To Do How to Destrucutre An Array

