let a = [1,2,3,4];
let b = a;

console.log(a); // logs [1,2,3,4]
console.log(b); // logs [1,2,3,4]

// so far so good, but...

b.push(5);

console.log(a); // logs [1,2,3,4,5]; 
console.log(b); // also logs [1,2,3,4,5]

// WTF? (what the factor?)

// complex data types do not pass their value, they pass a reference to the original object.
// a reference is basically an address for a specific location in memory