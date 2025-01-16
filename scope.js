// 1. Function scope
function sum(a, b) {
  const result = a + b;
  return result;
}

const x = sum(1, 2);

// console.log(result); // ReferenceError: result is not defined
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

console.log(x);

// 2. Block scope

let age = 20;
if (age < 25) {
  const isUnder25 = true;
  console.log(isUnder25);
}

// console.log(isUnder25); // ReferenceError: isUnder25 is not defined

// Workaround: Declare `let` variable first
let isUnder25;
if (age < 25) {
  isUnder25 = true;
  console.log(isUnder25);
}

console.log(isUnder25); // ReferenceError: isUnder25 is not defined

// 3. let vs var vs const
if (age < 25) {
  // Var will allow for access outside of scopes
  var isUnder25Number2 = true;
}

console.log(isUnder25Number2);
