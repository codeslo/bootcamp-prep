function calculate(func,val01,val02){
    return func(val01,val02);
}

function add(val01,val02){
    return val01 + val02;
}

function subtract(val01,val02){
    return val01 - val02;
}

console.log(calculate(add,5,3));

console.log(calculate(subtract,10,1));