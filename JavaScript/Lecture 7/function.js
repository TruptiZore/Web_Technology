/* Function -   function is used to execute the block of code.
                A reusable block of code that can take inputs and return a value
*/

function add(num1, num2) {
    let result = num1 + num2;
    return result;
}
console.log(add(19, 8));


function add(num1, num2){
    let result = num1 + num2;
    return result;
    console.log("Hello" );   /* after return the scope was not reachable.
    will not execute because any lines of code does not excecute after return */
}

console.log(add(5, 10));


function loginUser(username) {

    if (username == undefined) {
        console.log ("please enter username ");
    }

    return `${username} just logged in`;
}

console.log(loginUser("Trupti")); // when your string is empty it will return undefined


function calculate(...num1){
    return num1;
}

console.log(calculate(100,200,300)); // NaN not a number because num1 is not defined in function scope

//  ...num1 : spread/rest operator -  which gives all values in function arguments in array format.


const user_info = {
    username : "Trupti Zore",
    age : 21
};
            
console.log();

function handleUser_info(obj) {
    console.log(`username is ${obj.username}`);
    console.log(`age is ${obj.age}`);
}

handleUser_info(user_info);


const arr = [10,20,30,40];

function handleArray(obj1) {
    console.log(`Array Elements are ${obj1}`);
    console.log(`first Element is ${obj1[0]}`);
}
handleArray(arr);