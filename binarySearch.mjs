"use strict";

// BUSCA BINÁRIA
// Binary search

// Binary search happens by repeatedly dividing the search interval in half
// [A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z]
// Picture a dictionary with a thousand pages, and that every letter section has an equal number of pages, you're searching for a word that starts with F, the computer would go immediatly go to the page in the middle (500) of the dictionary, it will find a page with words that start with M

// The computer knows that F comes before M, so it will ignore everything that comes after this page

// It will go to the middle of the section where the letter starting with F could be (250), if it doesn't find the letter, it will start searching either before or after this page (It would go either to 125 or 375 depending wheater F comes before or after page 250), this goes on until it finds the page with the letter F

// Binary searches can only be used when the data is ordered, but is usually faster than sequential searches (unless the value being searched is at the start of the list)

// Test array
let num = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 110, 121];
let nSearch;

// Binary search function
const binarySearch = function (arr, n) {
  // Defining starting variables, that is, the start of the array and the end of the array, the end and start will keep changing, as to follow binary searches
  let start = 0;
  let end = arr.length - 1;

  // Number of necessary searches
  nSearch = 0;

  // Loop while the end is higher than the start
  while (end >= start) {
    // Defining middle position, it will change based on
    let mid = Math.floor((start + end) / 2);
    nSearch++;

    // If middle position is the searched value, return position (output)
    if (arr[mid] === n)
      return `Position of the value ${n}: ${mid}, it took ${nSearch} ${
        nSearch === 1 ? "search" : "searches"
      } to find it.`;

    // If mid position value is lower than the required value, turn start into "mid + 1"
    // If mid position value is higher than the required value, turn end into "mid - 1"
    arr[mid] < n ? (start = mid + 1) : (end = mid - 1);
  }
  return `The value ${n} is not on the array`;
};

// Tests with number
// console.log(binarySearch(num, 22));
// console.log(binarySearch(num, 121));
// console.log(binarySearch(num, 110));
// console.log(binarySearch(num, 0));
// console.log(binarySearch(num, 900));
// console.log(binarySearch(num, 55));
// console.log(binarySearch(num, 2));
// Ctrl + D

// Tests with string
import { nomes } from "./data/vetor-nomes.mjs";
// console.log(binarySearch(nomes, "ALEXANDRE"));
// console.log(binarySearch(nomes, "ZYON"));
// console.log(binarySearch(nomes, "TEST FOR ERROR"));
// console.log(binarySearch(nomes, "VILCINEIA"));

// Cool

//
//
//
/////////////////////////////////////////////////////////////////////////////////////
// Binary search inside objects
// Use search functions as parameters in the object binary search function, so you can use it with different searches
// Objects need to be ordered
// 0 if values are equal
// 1 if search value is higher than middle value
// -1 if search value is lower than middle value

import { objNomes } from "./data/vetor-obj-nomes.mjs";

// Binary search function for objects
const binarySearchObj = function (arr, fn, n) {
  // Defining starting values
  nSearch = 0;
  let start = 0;
  let end = arr.length - 1;

  // Main loop, while end is greater than start
  while (end >= start) {
    // Defining middle
    let mid = Math.floor((start + end) / 2);

    // Switch case for search
    switch (fn(arr[mid], n)) {
      case 0: // Case query is successful
        nSearch++;
        return `${n} is in position ${mid} it took ${nSearch} ${
          nSearch === 1 ? "search" : "searches"
        } to find it.`;
      case 1: // Case value is in a higher position
        start = mid + 1;
        break;
      default: // Case value is in a lower position
        end = mid - 1;
        break;
    }
    nSearch += 2;
  }
  // In case value is not found
  return `The value ${n} is not on the array`;
};

// Defining query for first_name
const findFirstName = function (valorMeio, n) {
  if (valorMeio.first_name === n) return 0; // Case value is found
  else if (valorMeio.first_name < n)
    return 1; // Case value is in a higher position
  else return -1; // Case value is in a lower position
};

// Tests, with findFirstName
console.log(binarySearchObj(objNomes, findFirstName, "ALEXANDRE"));
console.log(binarySearchObj(objNomes, findFirstName, "ZYON"));
console.log(binarySearchObj(objNomes, findFirstName, "TEST FOR ERROR"));
console.log(binarySearchObj(objNomes, findFirstName, "VILCINEIA"));
