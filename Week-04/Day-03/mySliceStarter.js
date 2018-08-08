// Define a function, mySlice, that accepts up to three arguments:
// originalArray
// startIdx (number, optional)
// endIdx (number, optional)

// This one is annoying. Be sure to check ALL the tests. Make them work one at a time.

// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array. 
function mySlice(arr,startIdx = null,endIdx = null){
   
}

// mySlice should return a copy of the original array. The copy should include all of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.
console.log(mySlice([1, 2, 3], 1, 2)); // => [2]

// If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
console.log(mySlice([1, 2, 3], 1)); // => [2, 3]

// If the startIdx is undefined, return a copy of the original array.
console.log(mySlice([1, 2, 3])); // => [1, 2, 3]

// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.
console.log(mySlice([1, 2, 3], -1)); // => [3]

// pass this test, too
console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -1));