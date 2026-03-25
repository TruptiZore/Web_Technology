// Promise with boolean condition

let isLoggedIn = false;   // change true / false

let loginPromise = new Promise((resolve, reject) => {

    if (isLoggedIn) {
        resolve("Login successful");
    } else {
        reject("Login failed: User not logged in");
    }

});

// handle result
loginPromise
    .then(result => {
        console.log("Success :", result);
    })
    .catch(error => {
        console.log("Error :", error);
    });