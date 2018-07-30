function whatSandwich(){
    let hasHam = false;
    let hasTurkey = true;
    
    if (hasHam) {
        return 'I want a ham sandwich';
    } else if (hasTurkey) {
        return 'I want a turkey sandwich';
    } else {
        return 'I guess I\'ll have roast beef, then'; // the backslash is an escape character that allows us to use the single quote in a string without terminating the string.
    }
}

// what do you expect to see?
console.log(whatSandwich());