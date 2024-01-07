//Truthy/Falsy value
const user = "ABC@ai";
if (user){
    console.log(`Found user ${user}`);
}else {
    console.log(`Not Found user `); // this will be printed if user = ""
}

//falsy values List
//false,0,-0,BigInt 0n,'', null,undefined, Nan


//truthy values List
//"0",'false',' ',[],{},function()

//How to check truthy for array
const userArray = [];
if (userArray.length === 0){ //code to check for truthy value for array, is empty
    console.log("Array is empty");
}

//How to check truthy for array
const emptyOb ={};
if (Object.keys(emptyOb).length ===0){ //get keys list & check if length is zero
    console.log("Object is empty");
}


false == 0  //true
false == '' //true
0 == '' //true

//Nullish Coalescing Operator(??)
//:null undefined - It assigns whatever first valid value is found

let val;
val = null ?? 10;
console.log(val);
val = 5 ?? 10;
console.log(val);
val = undefined ?? 15;
console.log(val);

val = undefined ?? null??20;
console.log(val);

//Ternary Operator
//test condition? true:false
const price =100;
price >=80?console.log("less than 80"):console.log('More than 80');