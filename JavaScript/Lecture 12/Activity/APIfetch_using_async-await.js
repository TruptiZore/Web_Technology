// API Fetch using async/await

console.log("Program Started");

async function getUser() {
    try {
        console.log("Fetching user data...");

        let response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        let data = await response.json();

        console.log("User Data :");
        console.log("Name :", data.name);
        console.log("Email :", data.email);
    } 
    catch (error) {
        console.log("Error :", error);
    }
}

getUser();

console.log("Program Finished");