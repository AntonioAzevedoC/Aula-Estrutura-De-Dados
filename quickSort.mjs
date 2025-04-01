// Quick-sort!

// Quick-sort chooses one element from the array as the pivot
// In the first run, it slices the array, with the "left" side containing values that is lower than the pivot, and the "right" side with values higher than the pivot
// It repeats this process until the array is organized
// Quick sort is recursive

let nbrs = [8, 4, 7, 2];

const quickSort = function (arr, start = 0, end = arr.length - 1) {
  if (end <= start) return;

  let pivot = end; // Defining the pivot
  let div = start - 1; // Defining the start position for the loop

  // Loop through array
  for (let i = start; i < end; i++) {
    if (arr[pivot] > arr[i]) {
      div++;
      if (div !== i) {
        [arr[i], arr[div]] = [arr[div], arr[i]];
      }
    }
  }
  div++;

  if (arr[div] > arr[pivot] && div !== pivot) {
    [arr[pivot], arr[div]] = [arr[div], arr[pivot]];
  }

  // Sorting the sorted halfs, recursion
  quickSort(arr, start, div - 1);
  quickSort(arr, div + 1, end);
};

// Output
// console.log(nbrs);
// quickSort(nbrs);
// console.log(nbrs);

///////////////////////////////////////////////////////////////////////////////////////////////////
// Using objects as data

const quickSortObject = function (
  arr,
  fnComp,
  start = 0,
  end = arr.length - 1
) {
  if (end <= start) return;

  let pivot = end; // Defining the pivot
  let div = start - 1; // Defining the start position for the loop

  // Loop through array
  for (let i = start; i < end; i++) {
    if (fnComp(arr[i], arr[pivot])) {
      div++;
      if (div !== i) {
        [arr[i], arr[div]] = [arr[div], arr[i]];
      }
    }
  }
  div++;

  if (fnComp(arr[pivot], arr[div]) && div !== pivot) {
    [arr[pivot], arr[div]] = [arr[div], arr[pivot]];
  }

  // Sorting the sorted halfs, recursion
  quickSortObject(arr, fnComp, start, div - 1);
  quickSortObject(arr, fnComp, div + 1, end);
};

import { objMotoristas } from "./data/motoristas-obj-desord.mjs";

quickSortObject(
  objMotoristas,
  (el1, el2) => el1.nome_motorista < el2.nome_motorista
);

// output
console.log(objMotoristas);
