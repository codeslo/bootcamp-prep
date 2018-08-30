// Write a function, callCount, that returns a new function. The new function should return the number of times its been called.
function callCount(){
    let count = 0;
    function innerFunc(){
        count ++;
        return count;
    }
    return innerFunc;
}


let newFunction1 = callCount();
let newFunction2 = callCount();

console.log(newFunction1()); // => 1
console.log(newFunction1()); // => 2

console.log(newFunction2()); // => 1
console.log(newFunction2()); // => 2