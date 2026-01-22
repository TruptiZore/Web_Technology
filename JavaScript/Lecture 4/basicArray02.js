const superheroes = ['Spiderman', 'Ironman', 'Wonderwoman', 'Hulk', 'Thor'];

const villains = ['Lex Luthor', 'Green Goblin', 'Thanos', 'Ultron', 'Loki'];

superheroes.push(villains);
console.log(superheroes);

console.log(superheroes[3]);      // Hulk
console.log(superheroes[5][2]);  // Thanos


const mynewArray = superheroes.concat(villains);
console.log(mynewArray);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
console.log(anotherArray);

const anotherArray1 = anotherArray.flat(Infinity);  // flattens all nested arrays
console.log(anotherArray1);

const anotherArray2 = anotherArray.flat(1);         // flattens only one level of nested arrays
console.log(anotherArray2);

const anotherArray3 = anotherArray.flat();         // flattens only one level of nested arrays by default
console.log(anotherArray3);

// flat(1) ------- it specifies how deep nested array is. It should be flattened default is 1.

// flat(infinity) ---------- fattens all the levels no matter how deep the nesting array is.

// flat() method ------- creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// flat() dosen't change the original array, it returns a new array. useful for nested arrays or arrays within arrays.


// data scripting using this array
console.log(Array.isArray('Trupti'));  // check given value is an array or not
// we can use string not an array that is why output is false

console.log(Array.from('Trupti'));   // converts an interatable objects like string, set, map into an array.

console.log(Array.from({name: 'Trupti'}));  // object is not iterable, so it returns empty array.

console.log(Object.keys({name: 'Trupti'}));    // returns an array containing the keys of the object
console.log(Object.values({name: 'Trupti'}));   // returns an array containing the values of the object 



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));  // creates a new array from given value no matters how many instance with the given values

// Array.of ------ converts value into array
// Array.from ------ convert iteratable objects into array


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