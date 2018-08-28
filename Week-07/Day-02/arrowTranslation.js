
// normal function to multiply parameters by five and push them to an array
function sendTimesFiveToArray(num1,num2){
    return [num1 * 5,num2 * 5];
}

// arrow function to do the same thing

let sendTimesFiveToArray2 = (num1,num2) => [num1*5,num2*5];

console.log(sendTimesFiveToArray(5,10));

console.log(sendTimesFiveToArray2(15,20));


