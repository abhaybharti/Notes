const User = {
  name: "abhay",
  email: "abhay@io",
  isActive: true,
};

//passing object to function
function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Abhay", isPaid: false });

//What happens when a function  returns  an object
function createCourse(): { name: string; price: number } {
  return { name: "reactjs", price: 399 };
}

console.log(createCourse());

let newUser = {
  name: "Abhay",
  isPaid: false,
  email: "h@h.com",
};

createUser(newUser); //This is wrong way, function expects only two key, while we are passing 3. We are passing more key than expected.
//createUser({ name: "Abhay", isPaid: false, email: "h@h.com" }); email can't be passed, will throw error

export {};
