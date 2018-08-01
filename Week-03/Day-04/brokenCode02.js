function brokenCode02(num1,num2,num3){
    let result = 0;
    let arr = [number1,number2,number3];
    for(let i = 0; i < arr.length;i++){
        result += arr[i]; // += is shorthand for variable = variable + x
    }
    return result;
}

console.log(brokenCode02(12,'13',24));
// should log 49