document.writeln("const variable<br>");
const a = 19;
console.log(a);
document.writeln("a = " + a);

//a = 29;          // This line will cause an error.
//console.log(a);
document.writeln("<br>Const variable cannot be reassigned.");


document.writeln("<br><br>let variable<br>");
let b = 27;
b = 37;            // Reassigning the value of b - changed 
console.log(b);
document.writeln("b = " + b);


document.writeln("<br><br>var variable<br>");
var c = 45;
c = 55;           // Reassigning the value of c - changed
console.log(c);
document.writeln("c = " + c);


document.writeln("<br><br>Block Scope with let , var<br>");
let x = 10;
var y = 20;
{
    let x = 100;   // block scope
    var y = 200; 
    document.writeln("Inside Block : let - x  &  var - y = " + x + "," + y);  
}
document.writeln("<br>Outside Block : let - x &  var - y = " + x + "," + y);


// Activity 1 --------
// Display student name, student ID, email;
document.writeln("<br><br>Activity 1<br>");
let student_name = "Trupti Zore";
let student_ID = "316";
let student_email = "truptizore@email.com";
document.writeln("Student Name : " + student_name + "<br>");
document.writeln("Student ID : " + student_ID + "<br>");
document.writeln("Student Email : " + student_email + "<br>");  


// Activity 2 --------
// Check even or odd
document.writeln("<br>Activity 2<br>");     
let num = 44;
if(num % 2 == 0) {
    document.writeln(num + " is Even Number.<br>");
}
else {
    document.writeln(num + " is Odd Number.<br>");
}


// Activity 3 --------
// Check student pass or fail
document.writeln("<br>Activity 3<br>");
let marks = 75;
if(marks >= 40) {
    document.writeln(`Student mark is ${marks}. Student is Pass.<br>`);
}
else {
    document.writeln(`Student mark is ${marks}. Student is Fail.<br>`);
}


// Activity 4 --------
// Display 1 to 10 numbers
document.writeln("<br>Activity 4<br>");
for(let i = 1; i <= 10; i++) {
    document.writeln(i + "<br>");
}


// Activity 5 --------
document.writeln("<br>Activity 5<br>");
let p = 198;
t = p;
p = 2004;
document.writeln("p = " + p + "<br>");
document.writeln("t = " + t + "<br>");