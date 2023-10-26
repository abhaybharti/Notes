const accountId = 14456;
let accountEmail = "abhay@gmail.com"
var accountPassword = "12345"
accountCity = "Bangalore"
// accountId =2; //not allowed
accountEmail ="hc@gmail.com"
accountPassword = "212121"
accountCity = "Delhi"
console.log(accountId);

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.log('accountState',accountState);