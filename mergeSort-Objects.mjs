// Merge-sort with objects!
// It isn't really that different from a normal mergeSort

let compositions = 0,
  divisions = 0,
  junctions = 0;

const mergeSortObjects = function (arr, fnComp) {
  // To be divided, the array must have at least two values
  if (arr.length < 2) return arr;

  // Slicing the array in half (Approximately)
  let half = Math.floor(arr.length / 2);

  // Making an array from each half
  let left = arr.slice(0, half);
  let right = arr.slice(half); // When a second parameter isn't given to .slice(), it defaults to the end of the array
  divisions++;

  // Recursion on the new arrays, they are divided until they return a single value
  left = mergeSortObjects(left, fnComp);
  right = mergeSortObjects(right, fnComp);

  // Joining the left and right arrays
  let posLeft = 0,
    posRight = 0,
    result = [];

  // Loop until no position is left unchecked
  while (posLeft < left.length && posRight < right.length) {
    compositions++;
    // If the left position is lower, it is added to the result array, if it is higher, right position is added to the result array
    // Index positions are also incremented
    if (fnComp(left[posLeft], right[posRight])) {
      result.push(left[posLeft]);
      posLeft++;
    } else {
      result.push(right[posRight]);
      posRight++;
    }
  }

  // Defining what array has leftovers
  let leftovers = [];

  // If position values are differnt, it means there are leftovers
  if (posLeft < posRight) {
    // leftover values are are copied to the leftovers array, from posLeft to the end of the left array
    leftovers = left.slice(posLeft);
  } else {
    // leftover values are are copied to the leftovers array, from posRight to the end of the right array
    leftovers = right.slice(posRight);
  }

  // the final array will be the concatenation of the result array and the leftovers array
  junctions++;
  return [...result, ...leftovers];
};

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

// When sorting strings, it follows the ASCII table (so `´^~¨ stays at the end, and numbers stay at the start)
const SortRazaoSocial = (left, right) => left.razao_social < right.razao_social;

console.time("Sorting time");
let sortedArray = mergeSortObjects(objMotoristas, SortRazaoSocial);
let memoryUseMB = process.memoryUsage().heapUsed / 1024 / 1024;
console.time("Sorting Time");

console.log(sortedArray, "\n", memoryUseMB);
