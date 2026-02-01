// this - this keyword is used to inform current context 

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