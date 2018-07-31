let numArr = [1,10,22,43,2,15];

console.log(numArr.sort());

numArr = [1,10,22,43,2,15];

let betterSort = numArr.sort(function(a,b){
    return a-b;
});

console.log(betterSort);