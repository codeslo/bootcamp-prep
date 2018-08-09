// Define a function, mySlice, that accepts up to three arguments:
// originalArray
// startIdx (number, optional)
// endIdx (number, optional)

// This one is annoying. Be sure to check ALL the tests. Make them work one at a time.

// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array. 
function mySlice(arr,startIdx = null,endIdx = null){
    if(endIdx === null){
        endIdx = arr.length;
    }
    if(startIdx === null){
        return arr;
    }

    if(startIdx < 0){
        startIdx = arr.length + startIdx; // -1 has to include the last array element
    }

    if(endIdx < 0){
        endIdx = arr.length -1 + startIdx; // -1 is the second to last array element
    }

    let result = [];
    for(let i = startIdx;i < endIdx; i++){
        result.push(arr[i]);
    }

    return result;
}

// mySlice should return a copy of the original array. The copy should include all of the elements from the orignal array, starting at and including the startIdx, up through and excluding the endIdx.
console.log(mySlice([1, 2, 3], 1, 2)); // => [2]

// If the endIdx is undefined, include all the indices starting at and including the startIdx through the end of the original array.
console.log(mySlice([1, 2, 3], 1)); // => [2, 3]

// If the startIdx is undefined, return a copy of the original array.
console.log(mySlice([1, 2, 3])); // => [1, 2, 3]

// startIdx and endIdx can be negative numbers, in which case they count indices from the back of the array.
console.log(mySlice([1, 2, 3], -1)); // => [3]

console.log(mySlice(['bagel', 'baguette', 'bialy', 'brioche'], -1));







