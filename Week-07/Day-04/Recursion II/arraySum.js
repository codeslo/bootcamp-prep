// Write a function, arraySum, that accepts an array of numbers and returns the sum of all the numbers in the array (no matter how nested!).
function arraySum(arr,flat = []){
    // iterate through array
    for(let i = 0; i<arr.length; i++){
        // if element is an array, recurse.
        if(Array.isArray(arr[i])){
            arraySum(arr[i],flat);
        }else{
            // if element is a number, push to flat array
            flat.push(arr[i]);
        }   
    }
    return flat.reduce((a,e) => a + e);
}


console.log(arraySum([1, [2, 3, [4]]])); // => 10