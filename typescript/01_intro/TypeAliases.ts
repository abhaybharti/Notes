//To Do- why we need type aliases
type User = {
  readonly _id: string; //making _id as readonly, no one can edit it
  name: string;
  email: string;
  isActive: boolean;
};

type MyString = string; // It is allowed to create type alias to string as MyString. It does not make much sense, but you can do it

function createUser(user: User) {}

createUser({ _id: "", name: "", email: "", isActive: true });


export {};
