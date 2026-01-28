let str1 = "Trupti";
console.log(str1); 
console.log(typeof str1);

// String Interpolation
// backticks ( `` ) allow embedding expressions
console.log(`Hello, ${str1} ! Welcome to JavaScript.`);

let fname = "Aditi";
console.log(`${fname}`);


// new String() creates a String object
//new keyword is used to create an instance of an object
const gameCount = new String("Cricket");
console.log(gameCount);

console.log(typeof gameCount);    // object

console.log(gameCount.length);

console.log(gameCount.toUpperCase());         // convert string to uppercase

console.log(gameCount.toLowerCase());        // convert string to lowercase

console.log(gameCount.charAt(2));           // return character from specified index

console.log(gameCount.indexOf('i'));       // return index of first occurrence of specified element


// Activity 4 ---------- String methods