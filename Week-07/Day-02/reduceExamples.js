let nums = [1,2,3,4];
let sum = nums.reduce((accumulator,element) => accumulator += element);
let product = nums.reduce((accumulator,element) => accumulator *= element);

console.log(sum);
console.log(product);