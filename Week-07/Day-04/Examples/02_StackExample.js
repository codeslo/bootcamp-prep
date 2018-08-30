
function first(){
    console.log('I am first');
}

function second(){
    console.log('I am second');
}

function third(){
    first();
    second();
    console.log('I am third');
}

first();

second();

third();

    
    
    