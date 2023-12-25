const arr = [1,2,3,5,6]

//ForOF to iterate on an array
for (const num of arr) {
    console.log(num); //print all values ofn an array
}

const h = "hello";
for (const char of h) {
    console.log(char); //print all character of a string
}

//JavaScript Map
//To Do - What is Map
const myMap = new Map();
myMap.set('A',1);
myMap.set('B',3);
myMap.set('C',5);
console.log(myMap); //prints map -> Map(3) { 'A' => 1, 'B' => 3, 'C' => 5 }

//Iterater an Map & destructure array returned for each key/value pair, [key,val] is destructuring map key/value to key & val
for (const [key,val] of myMap) {
    console.log(`key : ${key} -:- val : ${val}`);
}

//Note : When we run a forof loop on Map, each element is returned as an array. We need to do it in two step,
// 1. iterate through Map key/value pair using forof
// 2. Desctructure each array (containing key/value pair) in two key & value
// 3. Above approach can't be used on Object, forOf can't be used on Map
// 4. for of loop is used on Array/Map

//How to iterate an Object
const myObj = {
    k:"one",
    l:"two"
}
//We need ForIn to iteration over object & access value
for (const key in myObj) {
   console.log(`key :  ${key} : value : ${myObj[key]}`); //print all values
}

//Note : We can use ForIn on array, can't use on Map. Map is not an iterable.

//ForIn on array
const anAray = [1,2,3,6];
for (const key in anAray) {
 console.log(anAray[key]);
}

//ForEach Example
const mArray = ["J", "k","L"];
//foreach with normal function
mArray.forEach(function(item){
    console.log(item); //print all values of array, we can write any logic code within cury{} braces
})

//foreach with arrow function
mArray.forEach((item)=>{
    console.log(item);
})
//Using external or another function

console.log("--------------");
function printMe(item){
    console.log(item);
}

mArray.forEach(printMe)

//foreach has access to item, index & full array
mArray.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


//Array Of Objects

const mCode = [
    {name:"JS",file:'.js'},
    {name:"Java",file:'.java'},
    {name:"python",file:'.py'}
]

mCode.forEach((item)=>{
    console.log(item.name,item.file);
})

 //Notes - foreach does not return any value, better usable methods are filter/map/reduce

  //How to return value using ForEach
  const myNums = [1,2,3,4,5,6,7,8,9,10];
  const newNums = [];
  myNums.forEach((num)=>{
     if (num > 4){
         newNums.push(num)
     }
  })
  console.log(newNums);