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