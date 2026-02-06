// Memory

/* Stack memory ----    used for primitive datatype like string, number, boolean.  
                        It means copy of value is given. When we assign 1 varialble to another a copy is made , 
                        so changing one does not affect to others.  
*/ 
                        
let myYoutubename = "TRZ";
let newMyYoutubename = myYoutubename;
console.log(myYoutubename);
console.log(newMyYoutubename);

myoutubename = "ABC";
console.log(myoutubename);
                        

/* Heap memory  ----    used for non-primitive datatype like object, array, fuctions. 
                        reffrence (address) is share/given.  
*/

let user1 = { 
    fname : "Trupti",
    age : 21,
    ID : 316
}

let user2 = user1;
console.log(user1);
console.log(user2);

user2.ID = 317;
console.log(user1.ID);
console.log(user2.ID);

/*  Objects are stored in heap memory. 
    When we assign 1 object to another variable refference is copied, Not the value. 
    If we change 1 both varibales are change.  
*/
