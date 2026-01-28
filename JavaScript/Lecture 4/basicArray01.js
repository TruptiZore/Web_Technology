// Array
let myArray = [0, 1, 2, 3, 4, 5];
console.log(`My array ${myArray}`);

console.log(typeof myArray); 

const arr = new Array(0, 1, 2, 3, 4, 5);
console.log(arr[1]);

// Array methods
arr.push(8);         // add element to the end pf array
console.log(arr);

arr.pop();           // remove element from the end of array
console.log(arr);

arr.unshift(-1);     // it add element to the beginning of array and shift all elements to right
console.log(arr);

arr.shift();        // it remove first element and shift all elements to left
console.log(arr);
console.log(arr.shift());      // it return removed element
console.log(arr);
    
console.log(arr.includes(2));  // it check whether element is present in array or not
console.log(arr.includes(9));

console.log(arr.indexOf(2));   // it return index of element if present otherwise -1
console.log(arr.indexOf(9));


// Activity 6 ----------  Split and slice use 