// Merge-Sort!
// Merge sort divides its array into many (MANY) arrays, dividing the problem in many sub-problems that can be resolved through recursion. After all sub-problems are resolved the arrays are merged
// It consumes a LOT of memory and takes a while to process, so it shouldn't be used in most situations
// Look at an example:

let compositions = 0,
  divisions = 0,
  jun = 0;

const mergeSort = function (arr) {
  // To be divided, the array must have at least two values
  if (arr.length < 2) return arr;

  // Slicing the array in half (Approximately)
  let half = Math.floor(arr.length / 2);

  // Making an array from each half
  let left = arr.slice(0, half);
  let right = arr.slice(half); // When a second parameter isn't given to .slice(), it defaults to the end of the array
  divisions++;

  //   console.log(left, right);
};

let nbrs = [77, 55, 22, 11, 99, 33, 66, 44, 88, 0];

console.log(
  `The array [ ${nbrs} ] is unsorted.\nThe method merge-sort sorted the array: ${mergeSort(
    nbrs
  )}.\nIt took ${compositions} compositions, ${divisions} divisions and ${jun} jun.`
);
