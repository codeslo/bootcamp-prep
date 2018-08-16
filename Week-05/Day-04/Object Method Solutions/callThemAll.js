// Write a function callThemAll, that, given an object and a value, calls every method in the object, passing in the value as the argument with each call.

// callThemAll should return an array with all of the returned values from each method invocation. The order of the elements in the returned array does not matter.
function callThemAll(obj, val) {
    let result = [];
    let method;
    for (let key in obj) {
        method = obj[key];
        if (typeof method === 'function') {
            result.push(method(val));
        }
    }

    return result;
}


let addNums = {
    addTen: function (num) {
        return num + 10;
    },

    addTwenty: function (num) {
        return num + 20;
    },

    someProperty: 'value'
};

console.log(callThemAll(addNums, 100)); // => [110, 120]