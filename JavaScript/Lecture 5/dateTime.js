let myDate = new Date();
console.log(myDate)

console.log(typeof myDate)

console.log(myDate.toISOString())

console.log(myDate.toString())

console.log(myDate.toDateString())

console.log(myDate.toLocaleDateString())    // date-month-year


// Timestamp ---  when we create poll in application , then use timestamp

let myTimeStamp = Date.now()    
console.log(myTimeStamp) 
console.log(Date.now())         // converts in milliseconds    
console.log(Date.now()/1000)    // converts in seconds
console.log(Math.floor(Date.now())/1000)     //lowest value

let newDate = new Date;
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())    //january - 0 , month start from 0
console.log(newDate.getDay())      // sunday - 0 , day start from 0
console.log(newDate.getFullYear())
console.log(newDate.getUTCDate())   // current day 
console.log(newDate.getUTCDay())    

console.log(newDate.toLocaleString('default', {weekday : "long"}))


// Practice all Date and Time methods. Explain : Why Date/Time methods are use. How timestamps work (with examples)  

/*  Why Date/Time methods are use ------- 
    Date/Time methods are used to manipulate and retrieve date and time information in JavaScript.
    They allow developers to perform operations like getting the current date, setting specific dates,
    calculating time differences, and formatting dates for display or storage.
*/

/*  How timestamps work (with examples) ------ 
    Timestamps represent the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC (Coordinated Universal Time).
    They are used to track specific points in time and are commonly used in databases, logging events, and scheduling tasks.
    For example, a timestamp of 1625078400000 corresponds to July 1, 2021, 00:00:00 UTC.
*/

/*  difference between utc format and local format : 
    UTC format : is standard time zone.   
    local format : is based on your location time zone
*/


console.log(newDate.getHours())           // 24 hours format
console.log(newDate.getMinutes())         // 60 minutes 
console.log(newDate.getSeconds())         // 60 seconds
console.log(newDate.getMilliseconds())    // 1000 milliseconds = 1 second

console.log(newDate.getUTCMinutes())       // minutes in UTC format 
console.log(newDate.getUTCHours())         // hours in UTC format
console.log(newDate.getUTCSeconds())       // seconds in UTC format  
console.log(newDate.getUTCMilliseconds())  // milliseconds in UTC format

console.log(newDate.getTimezoneOffset())   // difference between local time and UTC time in minutes