// Define a function, zooInventory, that accepts a multi-dimensional array of animal facts.

// zooInventory should return a new, flat array. Each element in the new array should be a sentence about each of the animals in the zoo.

function zooInventory(arr) {
    let result = [];
    let entry = [];
    let animal = "";
    let species = "";
    let fact = "";
    for (let i = 0; i < arr.length; i++) {
        // look for the patterns in the data, and assign good variable names
        entry = arr[i];
        animal = entry[0];
        species = entry[1][0];
        fact = entry[1][1];
        result.push(animal + " the " + species + " is " + fact + ".");

    }
    return result;
}

// testing
let myZoo = [
    ['King Kong', ['gorilla', 42]],
    ['Nemo', ['fish', 5]],
    ['Punxsutawney Phil', ['groundhog', 11]]
];
console.log(zooInventory(myZoo));