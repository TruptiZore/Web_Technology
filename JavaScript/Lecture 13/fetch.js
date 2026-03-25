/*
Fetch ----
    - Fetch is builtin js method used to make http request.
    - It returns Promise.
    - when we need data from server, we use fetch().

basic syntax ---
    fetch("URL");

    fetch("HTTPS://jsonplaceholder.typicode.com/users");
    ------ it returns promises.
*/

fetch("https://jsonplaceholder.typicode.com/users/3")
  .then((response) => {
    return response.json();     // convert to JSON
  })
  .then((data) => {
    console.log(data);          // actual users data
  })
  .catch((error) => {
    console.log(error);
  });




//Activity ----
//  1. how to use async-await example with fetch method 
//  2. fetch user display names in html list 
//  4. fetch post, show only first 5 records
//  5. create a fetch promise manually, resolve after 3 sec and rejct after 3 sec
//  5. what is promise in js? what is promise status ?
//  6. difference between promise and callback
//  7. what is fetch method in js ?
//  8. what does fetch return ?
//  9. why do we use response.json ?
//  10. difference between then and catch or async and await
//  11. what is promse chaining ?

