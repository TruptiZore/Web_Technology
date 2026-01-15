console.log(40 + 20);
console.log(22 - 20);
console.log(6 * 2);
console.log(60 / 2);


let str1 = "hello";
let str2 = "trupti";
console.log(str1 + str2);


//important note - javascript only automatically convert a string to a numbers in arithmetical oprations.
console.log("1" + 2);
console.log("1" + 2+2);
console.log(1 + "2");
console.log(1+3 + "2");

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);


let scoreCounter = 200;
++scoreCounter;
console.log(scoreCounter);


//Activity 2 - check the output of below code snippets

console.log(true);        //No tricks here. You are logging a boolean, so the output is: true
console.log(+true);       //The + in front of a value is the unary plus operator.It forces JavaScript to convert the value to a number.For booleans: true → 1, false → 0 , so the output is: 1
console.log(+ "");        //An empty string is converted to number (0), so the output is: 0