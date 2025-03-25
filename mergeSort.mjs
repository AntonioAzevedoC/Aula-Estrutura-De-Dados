// Merge-Sort!
// Merge sort divides its array into many (MANY) arrays, dividing the problem in many sub-problems that can be resolved through recursion. After all sub-problems are resolved the arrays are merged
// It consumes a LOT of memory and takes a while to process, so it shouldn't be used in most situations
// Look at an example:

let compositions = 0,
  divisions = 0,
  junctions = 0;

const mergeSort = function (arr) {
  // To be divided, the array must have at least two values
  if (arr.length < 2) return arr;

  // Slicing the array in half (Approximately)
  let half = Math.floor(arr.length / 2);

  // Making an array from each half
  let left = arr.slice(0, half);
  let right = arr.slice(half); // When a second parameter isn't given to .slice(), it defaults to the end of the array
  divisions++;
  console.log("left: ", left, "right: ", right); // Use this to understand the slicings, idiot

  // Recursion on the new arrays, they are divided until they return a single value
  left = mergeSort(left);
  right = mergeSort(right);

  // Joining the left and right arrays
  let posLeft = 0,
    posRight = 0,
    result = [];

  // Loop until no position is left unchecked
  while (posLeft < left.length && posRight < right.length) {
    compositions++;
    // If the left position is lower, it is added to the result array, if it is higher, right position is added to the result array
    // Index positions are also incremented
    if (left[posLeft] < right[posRight]) {
      result.push(left[posLeft]);
      posLeft++;
    } else {
      result.push(right[posRight]);
      posRight++;
    }
  }
  console.log("result: ", result);

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
  console.log("leftovers: ", leftovers);

  // the final array will be the concatenation of the result array and the leftovers array
  junctions++;
  return [...result, ...leftovers];
};

let nbrs = [77, 55, 22, 11, 99, 33, 66, 44, 88, 0];

console.log("-------------------------------------------------------");
console.log(
  `The array [ ${nbrs} ] is unsorted.\nThe method merge-sort sorted the array: ${mergeSort(
    nbrs
  )}.\nIt took ${compositions} compositions, ${divisions} divisions and ${junctions} junctions.`
);
