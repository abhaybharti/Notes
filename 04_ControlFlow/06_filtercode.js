//filter -- The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array.

const myNums = [1,2,3,4,5,6,7,8,9,10];
let newMyNums = myNums.filter((num)=>num<4) //you can write condition here. If condition is wrapped inside {}, return keyword needs to be provided
console.log(newMyNums);

 newMyNumsTwo = myNums.filter((num)=>{return num<4})
 console.log(newMyNumsTwo);

