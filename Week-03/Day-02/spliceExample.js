let myArr = [0,1,2,3,4,5,6];
// splice out index positions 3 and 4
let splicedOut = myArr.splice(3,2); // start at index three, remove two items

// splice changes the original array
console.log("myArr after splice: "+myArr);
// splice also returns a value of type array
console.log("Splice return value is an array? "+Array.isArray(splicedOut));
console.log("Items spliced out: "+splicedOut);

