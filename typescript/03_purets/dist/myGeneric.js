"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
//Generic function declaration
//You are passing value as string, this will return as string
//if you are passing value as number, this will return as number
function identityThree(val) {
    return val;
}
identityThree("3");
//Another way to declare, generic function
function identityFour(val) {
    return val;
}
//You can replace T by any Letter or type/interface
function identityFive(val) {
    return val;
}
//taking params as array of T & returning as value
function getSearchProducts(products) {
    //do some database operations
    const myIndex = 3;
    return products[myIndex];
}
//arrow function syntax in TypeScript using generics
const getMoreSearchProducts = (products) => {
    //do some database operation
    const myIndex = 4;
    console.log(products.length);
    return products[myIndex];
};
//arrow function syntax in TypeScript
const getMoreSearchProductsAsArrowFunction = (val) => {
    return val;
};
