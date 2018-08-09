// Define a function, rotateArray, that accepts two arguments:

// originalArray (array)
// rotateNum (number)
function rotateArray(arr, num) {
    let result = arr;
    if (num < 0) {
        for (let i = 0; i < num * -1; i++) {
            let firstIdx = result.shift();
            result.push(firstIdx);
        }
    } else {
        for (let i = 0; i < num; i++) {
            let lastIdx = result.pop();
            result.unshift(lastIdx);
        }
    }
    return result;
}




// If the rotateNum is positive, rotate should return a copy of the original array rotated to the right by the rotateNum of indices.
console.log(rotateArray([1, 2, 3, 4, 5], 1)); // => [5, 1, 2, 3, 4]

// If the rotateNum is negative, rotate should return a copy of the original array rotated to the left by the rotateNum of indices.
console.log(rotateArray([1, 2, 3, 4, 5], -1)); // => [2, 3, 4, 5, 1]

// If the rotateNum is 0, rotate should return a copy of the original array without rotating it.

console.log(rotateArray([1, 2, 3, 4, 5], 0)); // => [1, 2, 3, 4, 5]