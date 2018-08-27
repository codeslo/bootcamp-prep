// Write a function, deeperCopy, that, unlike .slice, will deeply copy a two- dimensional array.
function deeperCopy(arr){
    return JSON.parse(JSON.stringify(arr));    
}

let myArray = [1, [2, 3]];

let copy = deeperCopy(myArray);
copy[1].push(4);

console.log(myArray); // [1, [2, 3]]

let copy2 = myArray.slice();
copy2[1].push(4);

console.log(myArray); // [1, [2, 3, 4]]