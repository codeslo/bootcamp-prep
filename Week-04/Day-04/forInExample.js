let myCartoon = {
    'firstName':'Betty',
    'lastName':'Boop',
    'inColor':false,
    'catchPhrase':'Boop boop be do boop!'
}

// log all the keys in myObj
for(let key in myCartoon){ // note 'key' is just a variable name. it can be any legal name. myCartoon refers to a specific object
    console.log(key);
}

// log all the values in myOb
for(let key in myCartoon){
    console.log(myCartoon[key]); // bracket notation used when a specific key name is not known
}

// log key / value pairs
for(let key in myCartoon){
    console.log(key + ':'+myCartoon[key]);
}


