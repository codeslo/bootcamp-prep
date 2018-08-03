// this loop will only run until it finds an odd number

function countTillOdd(arr){
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i] % 2 !== 0){
            console.log('I found an odd! I\'m freaking out! I quit!');
            break;
        }
        console.log(arr[i]);
    }
}

let testArr = [2,4,6,8,10,11,12,14,16,18];

countTillOdd(testArr);