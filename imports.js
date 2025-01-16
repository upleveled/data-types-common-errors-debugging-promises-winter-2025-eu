// ESM - new way
// Named import (curly brackets)
import { animalCount, isAnimal } from './imports/a.js';
// Default import (no curly brackets)
import sum from './imports/b/c.js';

// CommonJS - old way
// const { animalCount, isAnimal } = require('./imports/a.js');

console.log(animalCount);
console.log(isAnimal);
console.log(sum);
