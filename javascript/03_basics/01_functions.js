function hello(){
    console.log("A");
}

// hello; //This return reference of a function, useful in React component
// hello() //This statement executes a function

//check for undefined value using if operator
function userName(name){
    //Check for null and undefined
    if (name === undefined){
        console.log("Enter a username");
        return;
    }
    return `${name} just logged in`
}

console.log(userName("Abhay"));
console.log(userName());

// We can use logical Not (!) operator to check for null or undefined value
function userName2(name){
    //Check for null and undefined
    if (!name ){
        console.log("Enter a username");
        return;
    }
    return `${name} just logged in`
}

console.log(userName2("Abhay"));
console.log(userName2());

//To Do - Rest Operator
function calculateCartPrice(...num){
  return num;
}
console.log(calculateCartPrice(100,200,300)); //return an array as [100,200,300]

//Passing Object as a parameter in function

const aObject = {
    name:"Abhay",
    price: 299
}

function A(anObject){
    console.log(`${anObject.name} and ${anObject.price}`);
}

A(aObject);

//Passing array to functions
function returnsSecondValueFromArray(getArray){
    return getArray[1];    
}

const myArray = [3,4,6,8];
console.log("passing array as function : ",returnsSecondValueFromArray(myArray)); //pass array as parameters
console.log("passing array directly as function : ",returnsSecondValueFromArray([8,9,10])); //passing arrays as directly as params