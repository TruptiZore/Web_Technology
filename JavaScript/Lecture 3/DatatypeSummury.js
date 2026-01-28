
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


// Activity 5 ---------- function declaration, function definition, function call