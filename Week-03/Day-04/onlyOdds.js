let result = [];

for(let i = 0; i < 1000; i++){
    if(i % 2 !== 0){
        result.push(i)
    }
}

//console.log(result);

console.log(result.length);
let newResult = [];
for(let i = 0; i < result.length; i++){
    if (result[i] >=30 && result[i]<=70){
        newResult.push(result[i]);
    }
}
console.log(newResult);

let lastTen = result.splice(result.length - 10);

console.log(lastTen);