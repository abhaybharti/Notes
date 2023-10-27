
//1. primitive (when passed, it is passed as value, no reference is provided)
    // 7 types
    //1.1 String
    //1.2 Number
    //1.3 Boolean
    //1.4 null
    //1.5 undefined
    //1.6 Symbol
    //1.7 BigInt (to handle scientific number value, const bigNumber = 12345677777788n)

//2. non-primitive or reference type (can direclty refer memory address)
   //2.1 Array
      const heroes = ["Shaktiman","naagraj"]
   //2.2 Objects (can have mixed data types)
      let myObj = {
          name:"Abhay",
          age:22,
      }
   //2.3 Functions
      const myFunc = function(){
        console.log("hello world");
      }
      console.log(typeof heroes);

//JavaScript is a dynamically typed language which means that data types of variable are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.

//How to define Symbol
const id = Symbol('123')
const anotherId =Symbol('123')

console.log(id);
console.log(id === anotherId); //value is same but returns false
console.log(typeof id);
//typeof               results
/*1. undefined        : "undefined"
  2. Null             : "object"
  3. Boolean          : "boolean"
  4. Number           : "number"
  5. String           : "string"
  6. Object (native      
    and 
     does implement
     [[calll]])       : "object"
  7. Object (native     
    or host
    and 
     does implement
     [[calll]])       :"object"
  8. Object (or host     
        and 
     does implement
     [[calll]])       : implementation defined except may not be "undefined", "boolean",          
                      "number" or "String"
*/

