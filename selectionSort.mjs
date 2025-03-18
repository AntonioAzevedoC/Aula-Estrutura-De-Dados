"use strict"

// Selection Sort
// Basically a better bubble sort, it isolates the firstgit origin in the array/list and then it checks all other values, until it finds the lowest value, this "lowest value" then becomes the first value

const selectionSort = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        // Assume the current position holds the lowest value
        let lowPosi = i

        // Iterate only through the unsorted portion to find the true lowest value
        for (let j = i + 1; j < arr.length; j++) {
            // Update lowest position if "j" is lower than it
            if (arr[j] < arr[lowPosi]) {
                lowPosi = j;
            } 
        }

        // Swapping positions
        if (arr[i] > arr[lowPosi]) {
            [ arr[i], arr[lowPosi] ] = [ arr[lowPosi], arr[i] ]
        } 
    }
    return arr;
}

console.log(selectionSort([9, 2, 0, 4, 3]))

// i       = 0, 1, 2
// lowposi = 0, 1, 2, 1, 2, 3, 4
// j       = 1, 2, 3, 4, 2, 3, 4, 3, 4
// arr     = "[0, 2, 9, 4, 3]", "[0, 2, 9, 4, 3]", "[0, 2, 3, 4, 9]",  