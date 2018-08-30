function firstFunction(){
    throw new Error('My Stack Trace Error');
}

function secondFunction(){
    firstFunction();
}

function thirdFunction(){
    secondFunction();
}
    
thirdFunction();