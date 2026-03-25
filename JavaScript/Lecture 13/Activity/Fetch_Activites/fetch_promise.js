// Manual Promise (simulate fetch)

function fakeFetch(success) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error: Failed to fetch data");
            }

        }, 3000);

    });
}


// Call the function
fakeFetch(true)   // change to false to test reject
    .then(data => {
        console.log("Success:", data);
    })
    .catch(error => {
        console.log("Error:", error);
    });