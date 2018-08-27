// Write a 'mySplice' function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// mySplice only needs to take one element to add to the array (the .splice method can actually take any number of values to add).
// splice values are (startpos, num of items to remove, val to insert)
// Do not use .splice in your function.
function mySplice(arr, pos, numToRemove, val) {
    let tempArr = [];
    // iterate through arr. start popping off elements up to and including pos. elements get unshifted to tempArr for later use
    // can't use slice here because slice doesn't alter the original array
    for (i = arr.length - 1; i >= pos; i--) {
        tempArr.unshift(arr.pop());
    }
    // insert new character unless undefined
    if (val !== undefined) {
        arr[pos] = val;
    }
    // deep copy tempArr to result. We'll clean this up later
    let result = tempArr.slice();
    // shift elements from tempArray numToRemove times. This leaves us with only the elements that were removed from arr.
    for (let i = 1; i <= numToRemove; i++) {
        tempArr.shift();
    }
    // add remaining elements back to arr
    if (tempArr.length > 0) {
        for (let i = 0; i < tempArr.length; i++) {
            arr.push(tempArr[i]);
        }
    }
    // clean up result
    while (result.length > numToRemove) {
        result.pop();
    }

    return result;

}


let ourStuff = ['food', 'trash', 'clothes'];

console.log(mySplice(ourStuff, 1, 1));
console.log(ourStuff); // ['food','clothes']

let myArray = [1, 2, 3];

console.log(mySplice(myArray,1,1,'apples')); // => [2]

console.log(myArray);   // [1,'apples', 3]