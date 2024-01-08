"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "abhay",
    email: "abhay@io",
    isActive: true,
};
//passing object to function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Abhay", isPaid: false });
//What happens when a function  returns  an object
function createCourse() {
    return { name: "reactjs", price: 399 };
}
console.log(createCourse());
