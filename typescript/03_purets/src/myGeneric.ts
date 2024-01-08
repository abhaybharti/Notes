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

//identityFour<Bottle>({ });
