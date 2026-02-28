// API Fetch using .then()

console.log("Program Started");

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())
    .then(data => {
        console.log("User Data :");
        console.log("Name :", data.name);
        console.log("Email :", data.email);
    })
    .catch(error => {
        console.log("Error :", error);
    });

console.log("Program Finished");