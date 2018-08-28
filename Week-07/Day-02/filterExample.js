let nums = [1,2,3,4,5,6,7,8];
let evens = nums.filter(e => e % 2 === 0);
let odds = nums.filter(e => e % 2  === 1);
let empty = nums.filter(e => e > 10);

console.log(evens); // logs [ 2, 4, 6, 8 ]
console.log(odds); // logs [ 1, 3, 5, 7 ]
console.log(empty); // logs []