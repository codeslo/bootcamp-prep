
// this is a function that uses a nested loop and takes an array as a parameter. It uses a for loop to iterate through the array and a for...in loop to get the keys of each object

function getAllKeys(arr){
    let obj; // variable to store each object as we get to it
    let result = []; // array to store our return value
    for(let i = 0; i < arr.length; i++){
        // assign object to obj variable
        obj = arr[i];
        // loop through variable and get keys
        for(let key in obj){
            // push obj key to array
            result.push(key);
        }
    }

    return result;
}

let objectArray = [{firstObjectprop:"this is a value"},{secondObjectprop:"this is another value"},{thirdObjectprop:"this is yet another value"}];

console.log(getAllKeys(objectArray));

