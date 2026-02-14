/*  this -  this keyword is used to inform current context 
            this keyword not used in arrow function. 
            this keyword used in normal function.
*/

/*  arrow function -    arrow function is nothing but lambda expression.
                        it is shorter way to write the regular function.
*/


function myfun() {
    let username = "Trupti";
    console.log(username);
    console.log(this.username); 
}
myfun();


const myfun1 = function() {
    let username = "Trupti Zore";
    console.log(username);
    console.log(this.username);
}
myfun1();


const user = () =>
{
    let username1 = "Trupti";
    console.log(this);
    console.log(this.username);
};

user();


const addnum = (num1, num2) => {
    return num1+num2;
}

console.log(addnum(10,20));