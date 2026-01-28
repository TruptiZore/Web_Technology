// Activity 5 ---------- function declaration, function definition

// what is function declaration ? 
// Function declaration is the process of defining a function with a specific name and parameters.
function greet(name) { }


// what is function definition ?
// Function definition is the actual implementation of the function, which includes the code that will be executed when the function is called.
function add(a, b) {
    return a + b;
}

// How to call a function ?
// To call a function, you use its name followed by parentheses. Optionally passing arguments - if the function requires them.
console.log(add(2, 3));

console.log(greet('Aditi')); // Output : undefined , because greet function does not return anything