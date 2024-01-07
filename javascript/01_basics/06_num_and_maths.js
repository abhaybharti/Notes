const score = 400
const balance = new Number(100.05);
// console.log(typeof score);
// console.log(typeof balance);
// console.log(score);
// console.log(balance.toFixed(2));
const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(4));
const hundreds = 10000000
// console.log(hundreds.toLocaleString('en-IN'));
//+++++++++++++++++ Maths ++++++++++++++++++
console.log(Math.abs(-4)); // minus value get converted to 4 (positive value)
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); //take upper value
console.log(Math.floor(4.9)); // take lower value

let ab =[9,3,7,8,4]
console.log(Math.min(...ab)); // find lowest value
console.log(ab.reduce((a,b)=>Math.min(a,b))); //find lowest value
console.log(Math.random()); //return value between 0 & 1
console.log(Math.floor((Math.random()*10)+1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+10) // to get random value between min & max range

