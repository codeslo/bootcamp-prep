let myArr = [0,1,2,3,4,5,6];
// splice out index positions 3 and 4
let splicedOut = myArr.splice(6,1); // start at index three, remove two items
splicedOut.push(myArr.splice(2,1)[0]);
myArr.splice(0,1);

// splice changes the original array
console.log("myArr after splice: "+myArr);
// splice also returns a value of type array
console.log("Splice return value is an array? "+Array.isArray(splicedOut));
console.log(splicedOut);

