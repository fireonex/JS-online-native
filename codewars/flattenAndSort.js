"use strict";

function flattenAndSort(array) {
    let alignedArr = array.flat(Infinity)
    return alignedArr.sort((a, b) => a - b)
}

//Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]) //[1, 2, 3, 4, 5, 6, 7, 8, 9]