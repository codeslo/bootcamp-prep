function brokenCode01(num){
    let myNum = num;
    if(myNum < 10){
        myNum = 10;
    }
    return myNum;

}

console.log(brokenCode01(15)); // expect 10