// Activity 1  - write code for arr function with 2 examples

document.writeln("<b>Activity 1 ---- Array & Function</b><br>")

// Example 1
let arr1 = [10, 20, 30];
document.writeln("Array Example 1 : " + arr1 + "<br>")

function sumArray(a) {
    let sum = 0;
    for (let x of a) {
        sum += x;
    }
    return sum;
}
document.writeln("Sum of array : " + sumArray(arr1) + "<br><br>")

// Example 2
let arr2 = ["Java", "JS", "HTML"];
document.writeln("Array Example 2 : " + arr2 + "<br>")

function showArray(a) {
    for (let x of a) {
        document.writeln(x + " ");
    }
}
document.writeln("Array elements : ")
showArray(arr2)


// Activity 2 ---- Switch Case
document.writeln("<br><br><b>Activity 2 ---- Switch Case</b><br>")

let day = 3;
document.writeln("Given day number : " + day + "<br>")

switch (day) {
    case 1:
        document.writeln("Monday");
        break;

    case 2:
        document.writeln("Tuesday");
        break;

    case 3:
        document.writeln("Wednesday");
        break;

    case 4:
        document.writeln("Thursday");
        break;

    case 5:
        document.writeln("Friday");
        break;

    case 6:
        document.writeln("Saturday");
        break;

    case 7:
        document.writeln("Sunday");
        break;

    default:
        document.writeln("Invalid day");
}


// Activity 3 ---- Truthy and Falsy Values
/* how to use truthy and falsy values in js with examples
==>>    JavaScript converts values to true or false in conditions
        Falsy values : false, 0, "", null, undefined, NaN
        Truthy values : everything else (1, "text", [], {})
        Used in if conditions, loops, and logical operators
        Common in validation and decision making
*/
document.writeln("<br><br><b>Activity 3 ---- Truthy & Falsy</b><br>")

let value1 = 1;
let value2 = 0;

if (value1) {
    document.writeln("1 is Truthy value<br>")
}

if (!value2) {
    document.writeln("0 is Falsy value<br>")
}


// how to use turnary operators in js
// Activity 4 ---- Ternary Operator
document.writeln("<br><br><b>Activity 4 ---- Ternary Operator</b><br>")

let num = 5;
document.writeln("Given number : " + num + "<br>")
let result = (num % 2 === 0) ? "Even" : "Odd";
document.writeln("Result : " + result)


//write a code for how to use loops in array
// Activity 5 ---- Loops in Array
document.writeln("<br><br><b>Activity 5 ---- Loops in Array</b><br>")

let arr = [10, 20, 30];
document.writeln("Given array : " + arr + "<br><br>")

// for loop
document.writeln("Using for loop : ")
for (let i = 0; i < arr.length; i++) {
    document.writeln(arr[i] + " ")
}

// while loop
document.writeln("<br><br>Using while loop : ")
let i = 0;
while (i < arr.length) {
    document.writeln(arr[i] + " ")
    i++;
}

// do-while loop
document.writeln("<br><br>Using do-while loop : ")
let j = 0;
do {
    document.writeln(arr[j] + " ")
    j++;
} while (j < arr.length)


// Activity 6 ---- for...of, for...in, forEach
document.writeln("<b><br><br>Activity 6 ---- for of, for in, forEach</b><br>")

let fruits = ["Apple", "Banana", "Mango"];
document.writeln("Given array : " + fruits + "<br><br>")

// for...of loop
// Used to get values directly from array
document.writeln("Using for of : ")
for (let fruit of fruits) {
    document.writeln(fruit + " ")
}

// for...in loop
// Used to get index (key) of array
document.writeln("<br><br>Using for in : ")
for (let index in fruits) {
    document.writeln(fruits[index] + " ")
}

// forEach loop
// Used to run function for each element
document.writeln("<br><br>Using forEach : ")
fruits.forEach(function(fruit) {
    document.writeln(fruit + " ")
})

// Difference between for...of and for...in (Theory)
/*
for...of loop:
- Used to iterate over values of an iterable (array, string).
- It directly gives the element value.
- Mostly used with arrays.

for...in loop:
- Used to iterate over keys or index.
- In arrays, it returns index values.
- Mostly used with objects.

Key difference:
for...of -> values
for...in -> keys / index
*/


// Activity 7 ---- map and filter
document.writeln("<br><br><b>Activity 7 ---- map & filter</b><br>")

let numbers = [1, 2, 3, 4, 5];
document.writeln("Given array : " + numbers + "<br>")

// map example ----------

/* how to use map function in js 
==>>    map() creates a new array
        It does not change the original array
        Used when we want to transform each element
*/

let square = numbers.map(n => n * n);
document.writeln("Using map (square) : " + square + "<br>")

// filter example ----------
/* how to use filter function in js 
==>>    filter() returns a new array
        It keeps elements that match a condition
        Original array does not change
*/

let evenNums = numbers.filter(n => n % 2 === 0);
document.writeln("Using filter (even numbers) : " + evenNums)
