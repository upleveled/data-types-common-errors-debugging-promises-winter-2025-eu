// === Primitive Data Types ===

// --- Boolean ---
const bool1 = true;
const bool2 = false;

// Generating a boolean value
let age = 20;
const isOver25 = age > 25;
// console.log(isOver25);

// --- Numbers ---
const num1 = 1;
const num2 = 1.1;

const num3 = 2.01 * 'x';

// --- Strings ---
const name1 = 'karl1'; // Single quotes (quotation marks)
const name2 = 'karl2'; // Double quotes
// Backticks
// - put JS expressions inside them
// - multiline
const name3 = `karl3

${name2}

more lines
and more`;
// String() (string constructor) converts other values to a string
const name4 = String(1.3); // '1.3'

// --- Undefined ---
// "undefined" indicates a lack of initialization
const un = undefined;

// let variables will be undefined to start
let un2;
// console.log(un2);

// Accessing object properties with incorrect key names
const obj = { x: 1 };
console.log(obj.xx); // undefined

// --- Null ---
// "null" indicates an intentional setting of "empty"
const n = null;

age = null; // Reset a value to "empty" intentionally

// === Non-Primitive Data Types ===

// --- Objects ---
const user = {
  id: 1, // id property: unique identifier that shouldn't change
  firstName: 'Karl', // Object property, consisting of a key: firstName, and a value: 'Karl'
  lastName: 'Horky',
  // Nested object
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};

// "Object property" may also be called "attribute" or "key-value pair"

// Accessing an object property
const firstName = user.firstName; // Dot notation
const firstName2 = user['firstName']; // Bracket notation

const streetNumber = user.address.streetNumber; // Dot notation with nested object

// const streetNumberWithError = user.addresss.streetNumber;

console.log(
  firstName,
  firstName2,
  streetNumber,
  // streetNumberWithError,
);

// Bracket notation Example 1
let dropDown = 'lastName'; // value coming from user on website

const dynamicValue = user[dropDown];
console.log(dynamicValue);

// Bracket notation Example 2
const fruit = { color: 'red' };
const paint = { color: 'blue' };

let dropDown2 = 'color';

const selectedFruitValue = fruit[dropDown2]; // 'red'
const selectedPaintValue = paint[dropDown2]; // 'blue'

// Modifying an object
user.lastName = 'xxx';

// console.log(user);

// --- Arrays ---
const arr = ['abc', 'def']; // Array of strings

console.log(arr);

// Array of objects
const fruits = [
  { id: 1, color: 'red' },
  { id: 2, color: 'green' },
  { id: 3, color: 'green' },
];

// Accessing values in an array
console.log(arr[1]);
// console.log(fruits[1]);
console.log(fruits[0].color);

// Array methods

// Many of these array methods:
// 1. loop over each item
// 2. provide that item to function

// .map() - modify existing array (returns array)
console.log(
  arr.map((item) => {
    return item + 'x';
  }),
);

const modifiedFruits = fruits.map((fruit) => {
  const modifiedFruit = { ...fruit }; // Copy the object
  modifiedFruit.color = 'purple';
  return modifiedFruit; // return the modified item
});

console.log(modifiedFruits);
console.log(fruits);

// .filter() - retrieving multiple items (returns array)
console.log(
  fruits.filter((fruit) => {
    const isCorrectFruit = fruit.color === 'green';
    return isCorrectFruit; // return a boolean
  }),
);

// .find() - retrieving one item (returns single item)
console.log(
  fruits.find((fruit) => {
    const isCorrectFruit = fruit.color === 'purple';
    return isCorrectFruit; // return a boolean
  }),
);

// .forEach() - run some code for each item
fruits.forEach((fruit) => {
  console.log('fruit', fruit);
});
// Probably better to use for...const...of
for (const fruit of fruits) {
  console.log('fruit', fruit);
}

// .push() - add element to an array
arr.push('ghi');
arr.push('ghi');
arr.push('xxx', 'zzz');

// console.log(arr);

// pop, shift, unshift - retrieve or modify array items
// slice, splice - modify the number of elements in the array

// Spread syntax
console.log([
  // Insert all elements of array
  ...arr,
  'xxx',
  'yyy',
]);

// --- Functions ---
function simpleFunction() {
  console.log('simpleFunction');
}

simpleFunction();
simpleFunction();
simpleFunction();
simpleFunction();

const arrowFunction = () => {
  console.log('arrowFunction');
  console.log('arrowFunction');
  console.log('arrowFunction');
};

arrowFunction();

const arrowFunction2 = () => console.log('arrowFunction2');

arrowFunction2();

// Returning a value

function functionWithReturnValue0() {
  return 0;
}

const returnValue0 = functionWithReturnValue0();

console.log(returnValue0);

const functionWithReturnValue1 = () => {
  return 1;
};

const returnValue1 = functionWithReturnValue1();

console.log(returnValue1);

const functionWithReturnValue2 = () => 2; // implicit return

const returnValue2 = functionWithReturnValue2();
console.log(returnValue2);

// Parameters
function sum(a, b) {
  const result = a + b;
  return result;
}

const result1 = sum(1, 2);
console.log(result1);

const result2 = sum(100, 220);
console.log(result2);
