function keyValueLogger(arr){
    // normal for loop. Each element just happens to be an object literal
    for(let i = 0; i < arr.length; i++){ 
        console.log("Now logging key / value pairs for element "+i);
        for(let key in arr[i]){
            console.log(key + ":" + arr[i][key]); 
        } 
    }

    return "done!";
}

// in objectArray, each element is an object literal
let objectArray = [
    {
        'word':'hello',
        'number':3,
        'place':'San Luis Obispo'
    },
    {'word':'bird',
    'number':6,
    'place':'Atascadero'},
    {'word':'awesome',
    'number':17,
    'place':'Morro Bay'}
];

keyValueLogger(objectArray);

