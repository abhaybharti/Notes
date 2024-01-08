interface Database {
  connection: string;
  username: string;
  password: string;
}
function anotherFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, { connection: "", username: "", password: "" });

interface Quiz {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
}
