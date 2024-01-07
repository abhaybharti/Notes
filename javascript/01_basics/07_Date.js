/*JavaScript Date objects represent a single moment in time in a platform-independent format.

A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch). This timestamp is timezone-agnostic and uniquely defines an instant in history.*/
 
let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

let myCreatedDate = new Date(2023,0,23,5,3);
console.log(myCreatedDate);

let myCreatedDate1 = new Date("2023-01-14"); //YYYY-MM-DD
console.log(myCreatedDate1.toLocaleDateString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let newDate = new Date();
console.log(newDate.getMonth());
console.log(newDate.getDay());
console.log(newDate.getFullYear());

console.log(newDate.toLocaleDateString("default",{weekday:"long",timezone:"Asia/Kolkata"}));