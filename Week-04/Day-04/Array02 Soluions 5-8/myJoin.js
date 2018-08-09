// basically, re-inventing the Array.join method
// Define a function, myJoin, that accepts up to two arguments:

// array
// separator (string, optional)
// myJoin should return a string with all of the elements from the array joined togther. The separator should separate the joined elements:
// If separator is undefined, use ',' as the default separator.
// If any elements in the array are undefined or null, they should be replaced with an empty string in the returned string.
// Do not use the built-in .join array method in your answer. Feel free to use it in all future problems though!

function myJoin(arr,sep=','){
    result = '';
    let char = '';
    for(let i = 0; i<arr.length;i++){
        if(arr[i]){
            char = arr[i];
        }
        result+=(char);
        // sep doesn't add after last element
        if(i < arr.length -1){
            result+=(sep);
        }
        // reset char
        char = '';
    }

    return result;
}

console.log(myJoin(['hello', undefined, 'world'], '-'));
console.log(myJoin(['let\'s', 'make', 'a', 'list'], ' '));
console.log(myJoin(['Peter', 'Paul', 'Mary']));
console.log(myJoin(['a', 'b', 'c'], '+'));
