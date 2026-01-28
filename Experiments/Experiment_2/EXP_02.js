// Activity 1 ---- array,function,object declaration with example

// Array example 
document.writeln("<b>Activity 1 --- Array,Function,Object example</b><br>")
document.writeln("<b>Array Example </b><br>")
let newArray = [10, 20, 30, 40, 50];
document.writeln(`My Array : ${newArray}<br>`)
document.writeln("typeof newArray : " + typeof newArray)

// Function example 
document.writeln("<b><br>Function Example </b><br>")
function greet(name) {
    document.writeln(`Hello, ${name}!<br>`);
}
greet("Trupti");
document.writeln("typeof greet : " + typeof greet)

// Object example 
document.writeln("<b><br>Object Example </b><br>")
let student = {
    name: "Trupti",
    age: 21,
    address: "Vasagade"
};
for (let key in student) {
    document.writeln(`${key} : ${student[key]}<br>`);
}
document.writeln(`Student Name : ${student.name}<br>`);
document.writeln("typeof student : " + typeof student);


// Activity 2 ---- find largest number in string\
document.writeln("<b><br><br>----- String Activities -----</b>")
document.writeln("<b><br><br>Activity 2 --- Largest Number in String<br></b>")
let numStr = "10 45 23 89 12";
let nums = numStr.split(" ").map(Number);                // split(" ") - breaks string into array using space. map(Number) - converts each string value into a number
let largest = Math.max(...nums);                         //converts array into separate values
document.writeln(`Largest number is : ${largest}`)
 

// Activity 3 ---- find reverse number in string
document.writeln("<b><br><br>Activity 3 ---- Reverse Number in String<br></b>")
let numberStr = "12345";
let reverseNum = numberStr.split("").reverse().join("");
document.writeln(`Original number is : ${numberStr}<br>`)
document.writeln(`Reverse number is : ${reverseNum}`)


// Activity 4 ---- count vowels in string 
document.writeln("<b><br><br>Activity 4 ---- Count Vowels from String<br></b>")
let text = "JavaScript";
let vowels = "aeiouAEIOU";
let count = 0;

document.writeln(`String is : ${text}<br>`)
for (let ch of text) {
    if (vowels.includes(ch)) {
        count++;
    }
}
document.writeln(`Total vowels : ${count}`)

// Activity 5 ---- Palindrome String
document.writeln("<br><br><b>Activity 5 ---- Palindrome String</b><br>")

let str = "madam";
document.writeln("Given string : " + str + "<br>")

let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
    document.writeln("It is a palindrome string");
} else {
    document.writeln("It is not a palindrome string");
}


// Activity 6 ---- find palindrome number
document.writeln("<b><br><br>Activity 6 ---- Palindrome Number<br></b>")
let palNum = "121";
let isPalindrome = palNum === palNum.split("").reverse().join("");
document.writeln(`Number is : ${palNum}<br>`)
document.writeln(isPalindrome ? "It is a palindrome" : "It is not a palindrome") 


// Activity 7 ---- Write code for fibonacci series 
document.writeln("<b><br><br><b>Activity 7 ---- Fibonacci Series</b><br></b>")
let n = 7;
document.writeln("Number is : " + n + "<br>")
let a = 0, b = 1;
document.writeln("Fibonacci series : ")
document.writeln(a + " " + b + " ");

for (let i = 2; i < n; i++) {
    let c = a + b;
    document.writeln(c + " ");
    a = b;
    b = c;
}


// Activity 8 ---- find lagrest element in array
document.writeln("<b><br><br>----- Array Activities -----</b>")
document.writeln("<b><br><br><b>Activity 8 ---- Largest Element in Array</b><br></b>")
let arr = [5, 12, 9, 21, 3];
document.writeln("Given array : " + arr + "<br>")
let max = Math.max(...arr);
document.writeln("Largest element is : " + max)


// Activity 9 ---- remove duplicate elemnet in array
document.writeln("<b><br><br><b>Activity 9 ---- Remove Duplicates Element from Array</b><br></b>")
let dupArray = [1, 2, 2, 3, 4, 4, 5];
document.writeln("Given array : " + dupArray + "<br>")
let uniqueArray = [...new Set(dupArray)];
document.writeln("Array without duplicates : " + uniqueArray)


// Activityb 10 ---- find missing number in array
document.writeln("<b><br><br><b>Activity 10 ---- Missing Number</b><br></b>")
let missArr = [1, 2, 3, 5];
document.writeln("Given array : " + missArr + "<br>")
let total = (5 * (5 + 1)) / 2;
let sum = missArr.reduce((a, b) => a + b, 0);
document.writeln("Missing number is : " + (total - sum))


// Activity 11 ---- function to find even or odd
document.writeln("<b><br><br>----- Function Activities -----</b>")
document.writeln("<b><br><br><b>Activity 11 ---- Even or Odd using Function</b><br></b>")
let num = 10;
document.writeln("Given number : " + num + "<br>")
function evenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
document.writeln("Result : " + evenOdd(num))


// Activity 12 ---- Write code for sum of array in function 
document.writeln("<b><br><br><b>Activity 12 ---- Sum of Array using Function</b><br></b>")
let sumArr = [10, 20, 30];
document.writeln("Given array : " + sumArr + "<br>")
function sumOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
document.writeln("Sum of array is : " + sumOfArray(sumArr))
