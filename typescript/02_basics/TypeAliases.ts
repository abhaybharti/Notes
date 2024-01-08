//To Do- why we need type aliases
type User = {
  readonly _id: string; //making _id as readonly, no one can edit it
  name: string;
  email: string;
  isActive: boolean;
  creditCardDetails?: number; // ? marka field optional
};

type MyString = string; // It is allowed to create type alias to string as MyString. It does not make much sense, but you can do it

function createUser(user: User) {}

createUser({ _id: "", name: "", email: "", isActive: true });

let myUser: User = {
  _id: "1234",
  name: "h",
  email: "h@h.com",
  isActive: false,
};

// myUser._id = "123345" //not allowed to edit readable field

//mix and match
type cardNumber = {
  cardnumber: string;
};
type cardDate = {
  cardDate: string;
};

//combine cardNumber and cardDate and add a new field cvv and create a new object
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;  
  };

  
export {};
