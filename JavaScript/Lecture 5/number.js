const balance  = new Number(100);
console.log(balance);
console.log(typeof balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2));

//toFixed()----- used to make ecommerce websites where precision value is so long. 2 indicates digits after point 

const h = 1000000;
console.log(h.toLocaleString());            // by default prints digits in US standard
console.log(h.toLocaleString('en-IN'));     // to print digits in indian format



// Math 
console.log(Math);
console.log(Math.abs(-4));         // negative values converted into positive and positive remains as it is 
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));       // choose top value 
console.log(Math.floor(4.6));      // choose lower value
console.log(Math.min(4,6,1));
console.log(Math.max(4,6,1));



// activity 8  ------- 	Math.random() : Why we use it. Real-time / company-level usage examples.