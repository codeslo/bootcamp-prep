// Write a function, reverseArray, that accepts an array and returns a reversed copy of that array. Use recursion.
function reverseArray(arr,rev = [],index = arr.length-1){
    if(arr.length === rev.length){
        return rev;
    }else{
        rev.push(arr[index]);
        return reverseArray(arr,rev,index -1);
    }
}

let arr = [1,2,3,4]
let reversedArr = reverseArray(arr);

console.log(reversedArr)    // [4,3,2,1]
console.log(arr)    // [1,2,3,4]