// Write a function, sumNums, that takes a number greater than 1 and returns the sum of all the numbers between the given number and 1. Use recursion.

function sumNums(num,sum = 0){
    if(num < 1){
        return sum;
    }else{
        sum += num;
        console.log("num: "+num+", sum: "+sum);
        return sumNums(num -1,sum); // all code paths must return a value
    }
   
}

console.log(sumNums(3)); // => 6 (3 + 2 + 1)