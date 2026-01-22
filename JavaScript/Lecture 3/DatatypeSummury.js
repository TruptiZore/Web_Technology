// Symbol ----- unique and immutable data type
const another_id = Symbol('123');
console.log(another_id);
console.log(typeof another_id);

const id = Symbol('123');
console.log(id === another_id);  // Output : false , Symbols with the same description are unique and not equal


// Array -----
const arr = ['a', 'b', 'c'];
const num = [1, 2, 3];
console.log(arr);
console.log(num);


//Object ----- is a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.

const obj = {
    fname : 'Trupti',
    age : 21
}

console.log(obj);
console.log(obj.fname);
console.log(obj['age']);
console.log(obj.age);


// Functions -----
// IMP FOR INTERVIEW --- what is function declaration, function definition, How to call a function ?

const func = function()
{
    console.log('This is a function expression');
}

func();


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