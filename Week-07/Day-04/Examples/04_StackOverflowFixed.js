
function countdown(num){
    if(num < 1){
        console.log('done!');
    } else {
        console.log(num);
        countdown(num-1);
    }
}

countdown(8);
