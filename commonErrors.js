// // 1. ReferenceError: variable is not defined
// console.log(x);

// // Common solutions
// // - define the variable
// // - add missing import from a package

// // 2. TypeError: x is not a function
// const x = 1;
// console.log(x());

// 3. TypeError: Cannot read properties of undefined (reading 'streetNumber')
const user = {
  address: {
    streetName: 'Wipplingerstraße',
    streetNumber: 56,
  },
};

console.log(user.addressWithTypo.streetNumber);
