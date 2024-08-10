// # Day 11 : Promises and Async/Await

// ## Task Activities

// ### Activity 1: Understanding Promises

// #### Task 1 : Create a promise that resolves with a message after a 2-seconds timeout and log the message to the console
const delayMessage = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This message is displayed after 2 second");
  }, 2000);
});

delayMessage
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// #### Task 2 : Create a promise that rejects with an error message after 2-seconds timeout and handle the error using `.catch`

const delayMessage2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("reject => This message is displayed after 2 second");
  }, 2000);
});

delayMessage2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("error", error);
  });

// ### Activity 2: Chaining Promises

// #### Task 3 : Create a sequence of promises that simulates fetching data from a server. Chain the promise to log messages in a specific order
function fetchDataStep1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 1 : Fetching data from the server...");
      resolve("Data from step 1");
    }, 1000);
  });
}

function fetchDataStep2(previousData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Step 2: Processing data from step 1...");
      resolve(`${previousData} -> Date from step 2`);
    }, 1000);
  });
}

function fetchDataStep3(previousData) {
  return new Promise((resolve, reject) => {
    console.log("Step 3 : Finalizing and returning data...");
    resolve(`${previousData} -> Date from step 3`);
  }, 1000);
}

fetchDataStep1()
  .then((result) => fetchDataStep2(result))
  .then((result) => fetchDataStep3(result))
  .then((finalResult) => {
    console.log("Final Result : ", finalResult);
  })
  .catch((error) => {
    console.error("An error occured", error);
  });

// ### Activity 3: Using Async/Await

// #### Task 4 : Write an async function that waits for a promise to resolve and then logs the resolved value

async function logValue() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("async ->await -> promise -> resolve : Wait for 2 seconds");
    }, 2000);
  });

  let resolvedValue = await myPromise;
  console.log(resolvedValue);
}
logValue();

// #### Task 5 : Write an async function that handles a rejected promise using try-catch and logs the error message
async function logValue2() {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("async -> await -> promise -> reject : wait for 2 seconds");
    }, 2000);
  });

  try {
    //wait for the promise to resolve
    let resolvedValue = await myPromise;
    console.log(resolvedValue);
  } catch (error) {
    //handle the error if promise rejected
    console.error("Error : ", error);
  }
}

logValue2();

// ### Activity 4: Fetching Data from an API

// #### Task 6 : Use the fetch API to get data from a public API and logs the response data to the console using promises

const apiURL = "https://api.github.com/users/abhaybharti";
fetch(apiURL)
  .then((response) => {
    // Check if the response is successful (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    // Convert the response to JSON
    return response.json();
  })
  .then((data) => {
    // Log the response data to the console
    console.log("Response Data:", data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Fetch Error:", error);
  });

// #### Task 7 : Use the fetch API to get data from a public API and log the response data to the console using async/await
async function fetchGitHubProfile() {
  try {
    const requestOption = {
      method: "GET",
    };
    let response = await fetch(apiURL);
    let json = await response.json();
    console.log("GitHub : ", json);
  } catch (error) {
    console.log(error);
  }
}

fetchGitHubProfile();

// ### Activity 5:

// #### Task 8 : Use Promise.all to wait for multiple promises to resolve and then log all their values

//create three promise which resolves after different times
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is completed");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is completed");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 is completed");
  }, 5000);
});

//use promise.all() to wait for all promise to resolve
Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log("All promises are resolved");
    console.log(values);
  })
  .catch((error) => {
    console.log(error);
  });

// #### Task 9 : Use Promise.race to log the value of the first promise that resolves among multiple promises

// ## Feature Request:

// 1. `Promise Creation Script`: Write a script that demonstrate creating and handling promises, including both resolved and rejected states.
// 2. `Promise Chaining Script`: Create a script that chains multiple promises and logs messages in a specific sequence
// 3. `Async/Await Script`: Write a script that uses async/await to handle promises and includes error handling with try-catch
// 4. `API Fetch Script`: Create a script that fetches data from a public API using both promises and async/await and logs the response data
// 5. `Concurrent Promise Script`: Write a script that uses Promise.all and Promise.race to handle multiple promises concurrently and logs the results
