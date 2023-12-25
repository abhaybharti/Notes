//map -- The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

const myNums = [1,2,3,4,5,6,7,8,9,10];
let newNums = myNums.map((num)=>num+10) //will iterate all element & add value 10
console.log(newNums);

//To Do -- difference between filter and amp

// Note - map should be preferred instead of foreach if ask is to iterate all element & perform some operation

//function Chaining

const m = myNums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40);
console.log(m);