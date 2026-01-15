//variable declare by --- const
const a = 10;
console.log(a)

// a = 20;                    // This will cause an error
//console.log(a)


//variable declare by --- var, let
var b = 10;
b = 200;
let ab = 20;
ab = 300;
console.log(b);
console.log(ab);


// variable scope with var and let
{
    var b1 = 10;
    let ab1 = 20;
    console.log(b1);
    console.log(ab1);
}
b1 = 200;            // This will work because b1 is declared with var and has function/global scope
ab1 = 300;          // This will cause an error because ab1 is not defined outside the block
console.log(b1);    // This will work because b1 is declared with var and has function/global scope
console.log(ab1);  // This will cause an error because ab1 is not defined outside the block 



var b2 = 200;
let ab2 = 300;
console.log(b2);
console.log(ab2);

{
    var b2 = 10;
    let ab2 = 20;
    console.log(b2);
    console.log(ab2);
}
console.log(b2);    // This will work because b2 is declared with var and has function/global scope
console.log(ab2);   // This will work because ab2 is declared with let and has block scope