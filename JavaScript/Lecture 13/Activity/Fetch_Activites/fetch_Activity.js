// async-await example with fetch method

async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getData();

/*
    async is used to create an asynchronous function.
    fetch() is used to get data from an API or server.
    await waits until the response is received.
    response.json() converts the data into JSON format.
    The result is printed using console.log().
*/


/*
Q. Fetch post : used to send data to a server using the POST method with the fetch() function.
    fetch() sends a request to the server.
    method : "POST" means we are sending data to the server.
*/


/*
Q. Difference between promise and callback
| Feature        | Callback                                                                                   | Promise                                                                             |
| -------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| Definition     | A **callback is a function passed as an argument** to another function and executed later. | A **promise is an object that represents the result of an asynchronous operation.** |
| Code Structure | Uses **nested functions**.                                                                 | Uses **`.then()` and `.catch()` methods**.                                          |
| Readability    | Code becomes **hard to read** when many callbacks are used (callback hell).                | Code is **cleaner and easier to read**.                                             |
| Error Handling | **Difficult**, errors must be handled in each callback.                                    | **Easy**, errors handled using `.catch()`.                                          |
| Chaining       | **Not easy** to chain multiple operations.                                                 | **Easy to chain** multiple asynchronous operations.                                 |
*/


/*
Q. What is fetch() method in js ? 
    The fetch() method is used to request or get data from a server or API in JavaScript.
    Used for HTTP requests (GET, POST, PUT, DELETE).
    Returns a Promise.
    Commonly used to get data from APIs.
    It is mainly used to handle network requests and responses.
    fetch() sends a request to the server.
    The server sends a response back.
    response.json() converts the response into JSON data.
    .then() is used to handle the result.


/*
Q. what does fetch return ?
    It returns a Promise that resolves to a Response object containing the server's response.
*/


/*
Q. why do we use response.json method ?
    used to convert the response from the server into JSON format
    so that JavaScript can easily read and use the data.
    When we use fetch(), the server response is in raw format (stream),
    so we convert it into JSON object using response.json().
*/


 /*
 Q.Difference between .then() and .catch() 
    .then() :   used to handle the successful result of a Promise when it is resolved. 
                It receives the data returned from the promise.
    .catch() :  used to handle errors or failures when the promise is rejected.
 */


/*
Q. async and await
    async and await are used to handle asynchronous operations in a simple and readable way.
    async is used before a function to make it asynchronous.
    An async function always returns a Promise.
    await is used inside an async function to wait for a Promise to resolve before continuing the code.
*/


/*
Q. What is promise chaining ?
    means connecting multiple .then() methods together to perform asynchronous tasks one after another.
    The result of one promise is passed to the next .then() in the chain.
    The output of one .then() becomes the input of the next .then().
    It helps avoid callback hell and keeps code clean.
*/


//When callbacks are placed inside other callbacks many times, 
// the code becomes messy and hard to understand. 
//This situation is called callback hell.