// Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

function reverseArray(arr){
    let tempArr = [];
    let result = arr.slice();
    for(i = arr.length-1; i >= 0; i--){
        tempArr.push(arr.pop());
    }

    for(i = 0; i < tempArr.length; i++){
        arr.push(tempArr[i]);
    }
    return arr;
}

let myArr = [1,2,3,4];
console.log(reverseArray(myArr));
console.log(myArr);

