// Activity 4 ---------- String methods
const gameCount = new String("Cricket");
console.log(gameCount);

console.log(gameCount.slice(0,3));                          // extract a section of a string and return it as a new string

console.log(gameCount.replace('Cricket', 'Football'));     // replace a specified value with another value in a string
console.log(gameCount);

console.log(gameCount.includes('Cric'));                  // check whether a string contains a specified value or not and return true or false

console.log(gameCount.split(''));                        // split a string into an array of substrings

console.log(gameCount.trim());                        // remove whitespace from both ends of a string 