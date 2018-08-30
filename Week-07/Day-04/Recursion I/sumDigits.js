// Write a function, sumDigits, that sums all the digits of a given integer (assume positive). Use recursion.
function sumDigits(num,sum=0,index=0){
    let str = num +'';
    if(index > str.length-1){
        return sum;
    }else{
        sum += parseInt(str[index]);
        return sumDigits(num,sum,index+1);
    }
}

console.log(sumDigits(1234)); // => 10