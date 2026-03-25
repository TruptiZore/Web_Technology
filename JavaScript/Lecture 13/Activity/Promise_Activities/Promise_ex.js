// Example 1 - Chained Promises (Realistic Flow) --------

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Trupti" });
        }, 1000);
    });
}

function fetchOrders(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Order1", "Order2"]);
        }, 1000);
    });
}

function processOrders(orders) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Processed " + orders.length + " orders");
        }, 1000);
    });
}

// Promise chaining
fetchUser()
    .then(user => {
        console.log("User:", user.name);
        return fetchOrders(user.id);
    })
    .then(orders => {
        console.log("Orders:", orders);
        return processOrders(orders);
    })
    .then(result => {
        console.log(result);
    })
    .catch(err => console.log(err));



// Example 2 - Parallel Execution ------

function getProducts() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Laptop", "Mobile"]), 1000);
    });
}

function getUsers() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["User1", "User2"]), 1500);
    });
}

function getOrders() {
    return new Promise(resolve => {
        setTimeout(() => resolve(["OrderA", "OrderB"]), 500);
    });
}

// Run all together
Promise.all([getProducts(), getUsers(), getOrders()])
    .then(([products, users, orders]) => {
        console.log("Products:", products);
        console.log("Users:", users);
        console.log("Orders:", orders);
    })
    .catch(err => console.log(err));

    
/*
Quick Difference ----
    Chaining → one depends on another
    Promise.all() → all run together

Viva One-Liner ----
    Promises are used to handle asynchronous operations like API calls, 
    and can be chained or executed in parallel using methods like Promise.all().

*/