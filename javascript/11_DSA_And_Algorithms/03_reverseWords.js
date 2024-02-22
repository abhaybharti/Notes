//Reverse words in a sentence

function reverseWords(value){
 //Step 1 : replace multiple whitespace with a single whitespace
 //Step 2 : split string based on single whitespace & store output in array 
 let strTemp = value.replaceAll(/\s+/g," ").split(" ");
 let result = "";

 //Step 3 : Run a for loop & copy each element to string variable "result"
 for (let iLoop = strTemp.length-1;iLoop>=0;iLoop-- ){
    result = result.concat(strTemp[iLoop]," ");
 }
 //trim spaces and return value
 return result.trim();

}

console.log(reverseWords("Shanvi is an engineer"))
console.log(reverseWords("Shanvi    can code")) //sentence with multiple whitespace
console.log(reverseWords("Shanvi   polyglot    programmer"))
