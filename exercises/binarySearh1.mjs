let numbers = [
  10, 23, 37, 42, 55, 61, 73, 88, 95, 103, 111, 123, 134, 150, 167,
];

let nSearch = 0;

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
    console.log(`Posição lida: ${mid}: (Valor: ${arr[mid]})`);

    // If middle position is the searched value, return position (output)
    if (arr[mid] === n)
      return `Posição de valor ${n}: ${mid}, ${
        nSearch === 1
          ? `levou ${nSearch} pesquisa`
          : `levaram ${nSearch} pesquisa`
      } para encontra-lo.`;

    // If mid position value is lower than the required value, turn start into "mid + 1"
    // If mid position value is higher than the required value, turn end into "mid - 1"
    arr[mid] < n ? (start = mid + 1) : (end = mid - 1);
  }
  return `O valor ${n} não está no array`;
};

console.log(binarySearch(numbers, 55));
console.log(binarySearch(numbers, 3));
console.log(binarySearch(numbers, 167));

// It took three seconds to solve the exercise
