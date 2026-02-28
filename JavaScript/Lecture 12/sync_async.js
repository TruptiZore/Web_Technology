// Two types of execution/programming in JavaScript : synchronous and asynchronous

/* 
    1. synchronous -----
        - code excute line by line 
        - each task wait to previous task to complete before the next one start
        - nature - blocking event
        - js by default synchronous and single threaded
*/

// ex  ----
console.log("start");

const add = (a, b) => {
    return a + b;
}

let result = add(2, 3);
console.log(result);
console.log("end");

/* 
    2. asynchronous -----
        - some task take time like api call, file reading, timer add, etc.
        - js does not wait , it moves to next line 
        - nature - non-blocking event
        - code excute without waiting for previous task to complete
        - js provide various ways to handle asynchronous operations : callbacks, promises, async/await
        - used in -- 
            setTimeout, 
            reading file, 
            fetching data from server 
*/

console.log("start");

setTimeout(() => {  
    console.log("Inside setTimeout");
}, 2000);

console.log("end");

/* 
    setTimeout is an asynchronous function.
    That takes a callback function and a delay time in milliseconds.
    Is wait 2 sec, meanwhile it move to next line and print "end" and after 2 sec it print "Inside setTimeout". 
*/


/* 
Activities -----
    1. Guess the o/p game 
    2. Blocking vs Non-blocking 2 examples
    3. where they used in real time in company 
    4. To API calling used - API fetching - example using API fetch and async/await 
*/
