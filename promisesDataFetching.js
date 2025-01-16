import { fakeFetch } from './util/fakeFetch.js';

// if YouTube faster: A, C, B, D
// if Google faster: A, C, D, B

let youtubeResponseGlobal;
let googleResponseGlobal;

function logValues() {
  if (youtubeResponseGlobal && googleResponseGlobal) {
    console.log(youtubeResponseGlobal);
    console.log(googleResponseGlobal);
  }
}

// A) Start with YouTube promise
fakeFetch('https://example.com/youtube')
  .then((youtubeResponse) => {
    // B) Later: finish with YouTube
    youtubeResponseGlobal = youtubeResponse;
    logValues(); // In both functions, log ALL values (only if they exist)
  })
  .catch((error) => console.error(error.message));

// C) Start with Google promise
fakeFetch('https://example.com/google')
  .then((googleResponse) => {
    // D) Later: finish with Google
    googleResponseGlobal = googleResponse;
    logValues(); // In both functions, log ALL values (only if they exist)
  })
  .catch((error) => console.error(error.message));

// Promise.all() version - use this in your code
// console.log(
//   await Promise.all([
//     fakeFetch('https://example.com/youtube'),
//     fakeFetch('https://example.com/google'),
//   ]),
// );
