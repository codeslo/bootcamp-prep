// Define a function, dogBreeder, that accepts up to two optional arguments:
// name (string)
// age (number)
// dogBreeder should return an object that represents a new dog! If the user doesn't define a name, assume the dog's name is Steve. If the user doesn't define the dog's age, assume the dog's age is 0.

// this is a little tricky. if the user doesn't define a name, the app will think the first parameter is name, and age is undefined!

function dogBreeder(name = 'Steve',age = 0){ 
    if(typeof name === 'number'){
        age = name;
        name = 'Steve';
    }

    return {name,age};
}



console.log(dogBreeder('Sam', 12));   // => {name: 'Sam', age: 12}

console.log(dogBreeder(15));    // => {name:'Steve', age: 15}