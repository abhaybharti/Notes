const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  //DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});

//2nd promise
new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

//3rd promise -- pass data through resolve
const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ username: "chai", email: "chai@gmail.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

//4th Promise

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", email: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finally block -- THe promise is finally resolved or rejected");
  });

//promise 5
const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "javascript", email: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//promise 6
async function getAllUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("E:", error);
  }
}
getAllUsers();

console.log("----------------------------------");
// fetch with then/catch
fetch("https://api.github.com/users/abhaybharti")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

  //To Do - read more about fetch api
  // Micro task queue or priority queue  contains fetch request. It gets added on top of call stack.

