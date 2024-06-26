"use strict";
//code to declare class
class UserSample {
    constructor(email, name) {
        this.city = "";
        this.cityCode = "123";
        this.citPinCode = 12345; //private variable, it can't be accessed outside the class & can be accessed only by class function
        this.email = email;
        this.name = name;
    }
}
const user = new UserSample("h@h.com", "hitesh");
user.city = "delhi";
//Other way to write class code, mostly preferred by expert user to write production grade code
class User {
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
const user2 = new User("h@h.com", "hitesh", "12345");
