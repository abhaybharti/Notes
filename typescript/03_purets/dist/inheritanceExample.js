"use strict";
class UserForInheritance {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.cityCode = "123";
        this._courseCount = 1;
    }
    //defining a getter function by adding get keyword at begining of function
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //defining a setter function
    get setAppleEmail() {
        return `apple ${this.email}`;
    }
    //define a setter function by adding set prefix before function. a setter function can not return any value
    //You can not add set courseCount(courseNum): void or any {}
    //There is no return type in setter function
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends UserForInheritance {
    constructor() {
        //public : can be accessed by child class & outside class using class object
        //private : can be accessed only inside class
        //protected : can be access inside class as well as all child class
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
