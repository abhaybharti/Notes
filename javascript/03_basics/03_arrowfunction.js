const user = {
    name:"AB",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to Website`); //this contains all variable of object.
    }
}

//Note : This context works only inside object, does not work in function.
console.log(user.welcomeMessage());
user.name ="Ajay" //change value of name field
console.log(user.welcomeMessage()); //print updated value

console.log("this in node : ",this); // {} - in node, this prints {}. If you print console.log(this) in chrome browser console, it will prints windows context

function hello(){
    let name = "Abhay";
    console.log("name : ",this.name); //prints undefined (behavior is same in arrow function)
}
hello()

//To Do - Why we need arrow function

//If function scope is added in arrow function like {}, means if curly braces is used, you need to use return keyword to return value from function. Otherwise function will not return any value
const addTwo = (n1,n2) =>{
    return n1+n2;
}
console.log("Explicit return ", addTwo(5,7));

//if written like below or like const addThree = (n1,n2,n3) => n1+n2+n3;, will automatically return value. No need to use return keyword. This is called implict arrow function. This is used a lot in ReactJS.
const addThree = (n1,n2,n3) => (n1+n2+n3);
console.log("Implicit return",addThree(5,7,2));


//Return Object from Arrow function
const returnObjectFromArrowFunction = (n1,n2) =>
    ({name:n1,age:n2}) //to return object, need to wrap object in () braces


console.log(returnObjectFromArrowFunction("AB",23));

//Immediately Invoked Function Expression (IIFE)

//name IIFE function
(function chai(){
    console.log('DB Connected');
})(); //This will get executed

// Notes : 
// 1. function definition should be wrapper in ()
// 2. () Should be appended at the end of first braces
// 3. Should add ; at the end, to end context 

//To Do - Why we need IIFE, practical need
//This helps to avoid pollution due to global scope.

//unname IIFE function
( ()=>{
    console.log('DB Connected using arrow function');
})(); //IIFE with arrow function


//unname IIFE function with params
( (name)=>{
    console.log(`${name} DB Connected using arrow function`);
})("AB"); //IIFE with arrow function
