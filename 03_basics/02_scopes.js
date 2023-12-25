console.log(addOne(6));

//This approach of function declaration, you can call function execution statement before definition is written. This is called Hoisting.
function addOne(num){
    return num+1;
}

console.log(addOne(5));


//In this approach, function execution statement should be after definition. Otherwise, will throw `Cannot access 'addTwo' before initialization` errror
const addTwo = function (num){
    return num+2;
}
console.log(addTwo(10));