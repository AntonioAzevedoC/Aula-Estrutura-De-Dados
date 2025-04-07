const nbrs = [10, 23, 37, 42, 55, 61, 73, 88, 95, 103, 111, 123, 134, 150, 167];

const findX = function (arr, x, start = 0) {
  // If array has been iterated through, return -1
  if (start > arr.length) return -1;

  // If array in position "start" is equal to "x", return "start"
  // else return findX again, with "start + 1" as "start"
  if (arr[start] === x) return start;
  else return findX(arr, x, start + 1);
};

console.log(`A valor 10 está na posição: ${findX(nbrs, 10)}`);
console.log(`A valor 103 está na posição: ${findX(nbrs, 103)}`);
console.log(`A valor 12 está na posição: ${findX(nbrs, 12)}`);
console.log(`A valor 167 está na posição: ${findX(nbrs, 167)}`);
console.log(`A valor 95 está na posição: ${findX(nbrs, 95)}`);
console.log(`A valor 23 está na posição: ${findX(nbrs, 23)}`);
console.log(`A valor 90 está na posição: ${findX(nbrs, 90)}`);
