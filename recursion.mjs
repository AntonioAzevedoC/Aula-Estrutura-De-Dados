"use strict";

// Recursion (recursividade)
// A recursive function is a function that calls itself until it receives a instruction to stop
// A bit high demanding on the CPU and memory, and you must be sure that there is no infinite loop

/* Example
const example = function(){
    if (condition) {
        ...
    } else {
        example() 
    }
}
*/

const fatorial = function (n) {
  let result = n;
  if (n < 0) return "Fuck you";
  if (n === 0) return 1;

  while (n !== 1) {
    result *= n - 1;
    n--;
  }
  return result;
};

// console.log(fatorial(5));
// console.log(fatorial(3));
// console.log(fatorial(10));
// console.log(fatorial(1));
// console.log(fatorial(0));
// console.log(fatorial(-5));
console.log("-------------------------------");
///////////////////////////////////////////////////////////////////////////////////////////////////
// Doing the same thing with a recursive function
const recursiveFatorial = function (n) {
  if (n === 0) return 1;

  let result = n;
  if (n < 0) return "Fuck you";

  if (n !== 1) {
    result *= recursiveFatorial(n - 1);
  }
  return result;
};

console.log(recursiveFatorial(5));
// console.log(recursiveFatorial(3));
// console.log(recursiveFatorial(10));
// console.log(recursiveFatorial(1));
// console.log(recursiveFatorial(0));
// console.log(recursiveFatorial(-5));

// You could also make a more concise function
const conciseFatorial = function (n) {
  if (n <= 1) return 1;
  return n * conciseFatorial(n - 1);
};

// console.log(conciseFatorial(5));
