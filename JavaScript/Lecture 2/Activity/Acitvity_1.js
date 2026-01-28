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

//convert number to boolean
let numberValue = 0;
let numToBool = Boolean(numberValue);
console.log(numToBool);
console.log(typeof(numberValue));
console.log(typeof(numToBool));