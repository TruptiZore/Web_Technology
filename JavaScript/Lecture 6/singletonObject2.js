/*  Singleton object
    This creates an empty object using the Object constructor.
    NOTE : In JavaScript, this is NOT truly a singleton pattern.
    It just means the object is created using the constructor method.
 */

//singleton object

const user = new Object();   // singleton object - object created using Object constructor
console.log(user);


/*  Non-singleton object
    This creates an object using object literal syntax.
    This is the most common and recommended way.
*/

const user1 = {};        // non singleton object

user1.id = 101;          // adding properties dynamically
user1.name = "Trupti";
user1.age = 21;
user1.email = "zoretrupti08@gmail.com";
user1.isLogin = true;

console.log(user1);


//object inside object (Nested Object)

const RegularUser = {
    email : "truptizore@gmail.com",
    userName : {
        fullName : {
            firstName : "Trupti",
            lastName : "Zore"
        }
    }
};

console.log(RegularUser);
console.log(RegularUser.userName.fullName.firstName);
console.log(RegularUser.userName.fullName);