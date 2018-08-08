// Define a function, arrayFlattener, that accepts a two-dimensional array as an argument.

// arrayFlattener should return a new, one-dimensional array.

// Note: not just arrays side by side. have to deal with cases like this: arrayFlattener([1,[2, 3], 4]); // => [1, 2, 3, 4]

function arrayFlattener(arr){
    let result = [];
    for(let i = 0; i< arr.length; i++){
        // if the object is NOT an array, push it to result
        if(!Array.isArray(arr[i])){
            result.push(arr[i]);
        }else{
            // if the object IS an array, run a nested loop to push its elements to result
            for(let j = 0;j<arr[i].length;j++){
                result.push(arr[i][j]);
            }
        }
        if(i === arr.length-1){
            return result;
        }
    }
}

//console.log(arrayFlattener([[1,2,3,4],[5,6,7,8]]));
console.log(arrayFlattener([1,[2,3],4]));