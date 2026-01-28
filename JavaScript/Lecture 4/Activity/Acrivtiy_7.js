// Activity 7 ------- Array Methods

const fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
console.log(fruits);


console.log(fruits.slice(1, 3));  // it returns new array from index 1 to index 3 but not including index 3

console.log(fruits.toString());   // converts array to string

console.log(fruits.join(', '));     // it converts array into string with given separator
console.log(fruits.join('*  '));

console.log(fruits.reverse());    // it reverses the array

console.log(fruits.sort());       // it sorts the array in ascending order

console.log(fruits.sort().reverse());  // it sorts the array in descending orders

console.log(fruits.filter(fruit => fruit.startsWith('A')));  // it filters the array based on given condition and returns new array

console.log(fruits.map(fruit => fruit.toUpperCase()));  // it maps the array based on given condition and returns new array

fruits.forEach(fruit => console.log(fruit));  // it iterates the array and performs given action for each element

fruits.splice(2, 1, 'Kiwi', 'Pineapple');  // it removes 1 element at index 2 and adds 'Kiwi' and 'Pineapple' at that position
console.log(fruits);

// splice(startIndex, deleteCount, item1, item2, ...)