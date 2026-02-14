// There are two types of object declaration
// 1. Object Literals ----- singleton not create.
//    Object Constructor  ------- singleton create.
// 2. singleton object

// when we create Constructor object, it creates singleton object , it means itself object.

// when we create object as a literals, it not creates singleton object 

// objet means key value pair

// Example of object Literals
let myobj = {
    name : "Trupti",
    age : 21,
    location : "Vasagade",
    email : "zoretrupti08@gmail.com",
    isLogin : true,
    lastLoginDay : ["Monday", "Tuesday", "Friday"],
    "fullName" : "Trupti Zore",
    //[mysymbol] : "mykey1"
};

console.log(myobj);
console.log(myobj.email);
console.log(myobj.fn);

myobj.email = "truptizore@gmail.com";    // it will update the email property
console.log(myobj.email);

Object.freeze(myobj);              // it will not allow to change the object properties
myobj.email = "neha@gmail.com";   // it will not update the email property
console.log(myobj.email);


/*  freeze used to keep data integrate that is email is changed and not write this line
    then it will print new value and if we write this line then if fwe try to change value
    it will not print old value instead of new value
*/

console.log(myobj.lastloginday);
console.log(myobj.age);
console.log(myobj.location);
//console.log(myobj.[mysymbol]);
//console.log(typeof myobj.mysymbol);


// method in object 
myobj.greeting = function() {          
    console.log("Hello " + this.name);
}

console.log(myobj.greeting())


//Symbol example ----------
const mySymbol = Symbol("mySymbolKey");
const myobj2 = {
    [mySymbol] : "TruptiZore"
};
console.log(mySymbol)
console.log(myobj2);
console.log(typeof myobj2);
console.log(typeof myobj2[mySymbol]);