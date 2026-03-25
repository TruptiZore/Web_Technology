/*
why promises are better than callback ? -----
    Because they make asynchronous code easier to read, manage, and handle errors.
    It allows multiple asynchronous operations to be executed in sequence means chaining operations.
    In callback function error handling is dony at every function but in promises using catch() handles
    errors in whole chain.
*/

//The async keyword is used to create an asynchronous function that always returns a Promise. 
// The await keyword is used inside it to wait for the promise result, 
// making the code easier to read and write.

// Q. implement promise using async keyword 
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

async function displayData() {
  let result = await fetchData();
  console.log(result);
}

displayData();

// Q. create 4 promises example
// Promise 1
let p1 = new Promise((resolve, reject) => {
    resolve("Promise 1 completed");
});

// Promise 2
let p2 = new Promise((resolve, reject) => {
    resolve("Promise 2 completed");
});

// Promise 3
let p3 = new Promise((resolve, reject) => {
    resolve("Promise 3 completed");
});

// Promise 4
let p4 = new Promise((resolve, reject) => {
    resolve("Promise 4 completed");
});

p1.then(res => console.log(res));  //.then() used to display result
p2.then(res => console.log(res));
p3.then(res => console.log(res));
p4.then(res => console.log(res));