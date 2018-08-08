// Define a function, oddCouple, that accepts an array of numbers as an argument.

// oddCouple should return a new array with the first two odd numbers from the original array:

function oddCouple(arr){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        if(result.length  === 2){
            return result;
        }
        if(arr[i] % 2 !== 0){
            result.push(arr[i]);
        }
        
    }
    return result;
}

console.log(oddCouple([1,2,3,4,5]));