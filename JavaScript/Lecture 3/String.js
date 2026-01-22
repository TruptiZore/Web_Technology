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

console.log(gameCount.slice(0,3));                          // extract a section of a string and return it as a new string

console.log(gameCount.replace('Cricket', 'Football'));     // replace a specified value with another value in a string
console.log(gameCount);

console.log(gameCount.includes('Cric'));                  // check whether a string contains a specified value or not and return true or false

console.log(gameCount.split(''));                        // split a string into an array of substrings

console.log(gameCount.trim());                        // remove whitespace from both ends of a string 