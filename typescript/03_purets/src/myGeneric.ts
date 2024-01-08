const score: Array<number> = [];

const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//Generic function declaration
//You are passing value as string, this will return as string
//if you are passing value as number, this will return as number
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree("3");

//Another way to declare, generic function
function identityFour<T>(val: T): T {
  return val;
}

//You can replace T by any Letter or type/interface
function identityFive<H>(val: H): H {
  return val;
}

interface Bottle {
  brand: string;
  type: number;
}

//taking params as array of T & returning as value
function getSearchProducts<T>(products: T[]): T {
  //do some database operations
  const myIndex = 3;
  return products[myIndex];
}

//arrow function syntax in TypeScript using generics
const getMoreSearchProducts = <T>(products: T[]): T => {
  //do some database operation
  const myIndex = 4;
  console.log(products.length);

  return products[myIndex];
};

//arrow function syntax in TypeScript
const getMoreSearchProductsAsArrowFunction = (val: number): number => {
  return val;
};
