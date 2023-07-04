/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// // Function declaration:
// function doSomeMath(a, b) {
//   let c = a + b;
//   return c;
// }

// // Function expression:
// const doMoreMath = function (a = 3, b = 2) {
//   let c = a * b;
//   return c;
// };

// console.log("Do some math:", doSomeMath(5, 6));
// console.log("Do more math:", doMoreMath(5, 6));
// console.log("Do more math:", doMoreMath());
// console.log("Do more math:", doMoreMath);

// // Immediately Invoked Function Expression (IIFE)
// (function () {
//   let a = 4;
//   let b = 6;
//   let c = doSomeMath(a, b);
//   console.log(`The sum of a and b is: ${c}`);
// })();

// Function Declaration
function declaredFunction(a = 0, b = 0) {
  // let c = a + b;
  let c = a + b;
  return c;
}

console.log("declaredFunction:", declaredFunction(1, 2));

// Function Expression (Modern Approach)
const expressedFunction = function (a = 0, b = 0) {
  let c = a * b;
  return c;
};

console.log("expressedFunction:", expressedFunction(1, 2));

// Immediately Invoked Function Expression (IIFE)
(function () {
  let a = 1,
    b = 2;
  let c = a / b;
  console.log("IIFE:", c);
})();
