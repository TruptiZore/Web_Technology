/*
Promises -----
    - A PROMISE is an object that represent future result of an asynchronous operation.
    - promise means, I promise to give results later.
    - ex ----  Zomato application

promises has 3 states ---
    1. pending (waiting) 
    2. resolved (success)/fulfill
    3. rejected (failed)

ex ----  pending -> resolve or rejected

syntax ----
        let myPromise = new Promise((resolve, reject) => {
        });

resolve --> success
reject --> error

.then(result) --> runs when success
.catch(error) --> runs when error

*/

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  //   let success = false;
  if (success) {
    resolve("Data Fetched Successful");
  } else {
    reject("Error while data fetching...");
  }
});

myPromise
  .then((result) => {
    //runs when success
    console.log(result);
  })
  .catch((error) => {
    //runs when error
    console.log(error);
  });

//Example 1
let myPromise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async Task completed");
    resolve();
  }, 3000);
});

myPromise1.then(() => {
  console.log("Promise consume");
});


//Example 2
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Trupti Zore", ID: 101});
  }, 3000);
});

promise3.then((user) => {
  console.log(user);
});



//  Activity ------
//      1. why Promises is better then callback
//      2. create 4 promise examples
//      3. Promise example with one boolean variable (true/false) and error handling
//      4. promises in function using async keyword  
//      5. 2 example any 