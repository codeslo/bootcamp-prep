
function factorial(num){
    if(num <= 1){ //base case
        return num;
    } else {
        return num * factorial(num-1); //recursive call
    }
}

let answer = factorial(4);

console.log(answer);