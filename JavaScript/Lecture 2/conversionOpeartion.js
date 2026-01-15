//convert number to string
let num = 33;
let numString = String(num);
console.log(numString);
console.log(typeof(num));
console.log(typeof(numString));

//convert string to number 
let string = "34AB";
let stringNum = Number(string);
console.log(stringNum);
console.log(typeof(string));
console.log(typeof(stringNum));


//Activity 1 -- do all conversions

//convert boolean to string
let bool = true;
let boolString = String(bool);
console.log(boolString);
console.log(typeof(bool));
console.log(typeof(boolString));

//convert string to boolean
let strBool = "true";
let strBoolToBool = Boolean(strBool);
console.log(strBoolToBool);
console.log(typeof(strBool));
console.log(typeof(strBoolToBool));

//convert null to number
let nullValue = null;
let nullToNum = Number(nullValue);
console.log(nullToNum);
console.log(typeof(nullValue));
console.log(typeof(nullToNum));

//convert undefined to number
let undefinedValue = undefined;
let undefinedToNum = Number(undefinedValue);
console.log(undefinedToNum);
console.log(typeof(undefinedValue));
console.log(typeof(undefinedToNum));

//convert long to number
let longNum = 12345678901234567890n;
let longToNum = Number(longNum);
console.log(longToNum);
console.log(typeof(longNum));
console.log(typeof(longToNum));

