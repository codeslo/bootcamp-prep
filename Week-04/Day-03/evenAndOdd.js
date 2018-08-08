// Define a function, evenAndOdd, that accepts an array.

// evenAndOdd should return a new array. The first element in the new array should be an array with all of the even numbers from the original array. The second element in the new array should be an array with all of the odd numbers from the original array.

function evenAndOdd(arr){
    let result = [[],[]];
    for(let i = 0; i<arr.length;i++){
        if(arr[i]%2 === 0){
            result[0].push(arr[i]);
        }else{
            result[1].push(arr[i]);
        }
    }

    return result;
}

console.log(evenAndOdd([1,2,3,4,5,6,7,8,9]));