// Define a function, myIncludes, that accepts an array and a searchValue.

// myIncludes should return true if the searchValue is an element in the array. Otherwise, myIncludes should return false.

function myIncludes(arr,sv){
    if(arr.indexOf(sv) === -1){
        return false;
    }

    return true;
}

console.log(myIncludes([1,2,3,4],2)); // expect true