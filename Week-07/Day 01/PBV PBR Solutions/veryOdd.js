// Write a function, veryOdd. The function accepts an array of numbers. It should return a new array that contains only the odd numbers from the given array. veryOdd must not mutate the given array.
function veryOdd(arr){
    let result = arr.slice(); // makes a deep copy
    for(let i = 0; i < arr.length; i++){
        if(result[i] % 2 === 0){
            result.splice(i,1);
        }
    }
    return result;
}



let allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];
let oddNums = veryOdd(allTheNums);

console.log('oddNums:', oddNums); // [1, 3, 5, 7];
console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]