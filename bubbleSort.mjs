"use strict";

// Sorting algorithm Bubble Sort
// One of the simplest sorting algorithmns, the idea is to loop through a list/array multiple times, each time, leading the highest value to the top (or bottom, yk, depending on your function and math)
// Basically, the algorithm keeps swapping the position of adjacent values until they are in the right position

let test = [80, 11, 56, 90, 0, 34, -5, 83, 45, 28, 12];
// let test = [1, 2, 3, 4];
const bubbleSortWithFor = (arr) => {
  // Loop through each value in the array
  for (let i = 1; i < arr.length; i++) {
    // In each iteration of the first, loop through each value in the array
    for (let j = 0; j < arr.length - i; j++) {
      // If the next position in the array is f a higher value than the current position, chage the value's position
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  // Returning sorted array
  return arr;
};

// console.log(bubbleSortWithFor(test));

let test1 = [100, 9, 8, 0, -8, 7, 6, 34, 12, 1, 90, 78];
const bubbleSortWithDoWhile = function (arr) {
  let shift;

  // do while array is unsorted
  do {
    // Defining shile position as "false", if no sorting is done in a whole iteration of the loop below, the array is sorted and the "do while" ends
    shift = false;

    // "For" that loops over the array
    for (let i = 0; i < arr.length - 1; i++)
      // If the next position in the array is f a higher value than the current position, chage the value's position
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        // Defining that a shift has happened, so the "do while" continues, once an entire loop is done without a shift, "do while" ends
        shift = true;
      }
  } while (shift);

  // returning sorted array
  return arr;
};

// console.log(bubbleSortWithDoWhile(test1));

///////////////////////////////////////////////////////////////////////////////////////
// Using bubble sort with objects
const bubbleSortForObjects = function (arr, fnComp) {
  let shift;
  let shifts = 0;
  let loop = 0;

  do {
    shift = false;

    for (let i = 0; i < arr.length - 1; i++) {
      loop++;
      // The same thing as the others, but using a custom function
      if (fnComp(arr[i], arr[i + 1])) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        shift = true;
        shifts++;
      }
    }
  } while (shift);

  return [arr, shifts, loop];
};

// THIS TAKES A MINUTE AND A HALF TO RUN
import { objMotoristas } from "./data/motoristas-obj-desord.mjs";
// console.time("Tempo de ordenação");
// // Sorting by driver's name
// let result = bubbleSortForObjects(
//   objMotoristas,
//   (a, b) => a.nome_motorista > b.nome_motorista
// );
// console.log(
//   `The sorting took ${result[1]} shifts, and ${result[2]} loops, the final result is: \n ${result[0]}`
// );
// console.timeEnd("Tempo de ordenação");
