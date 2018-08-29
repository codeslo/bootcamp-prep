// Write a function whosASpecial that takes an array of pets and returns a string confirming what you already knew: all of the pets are very special! Feel free to add your own special pets to the array!

// Use .forEach in your answer.

function whosASpecial(pets){
    let result = "";
    pets.forEach(function(pet){
        result += pet.name + " the " + pet.species + " is very special! ";
    });
    // remove last space to make test happy
    result = result.trim();

    return result;
}



let specialPets = [{
    name: 'Sadie',
    species: 'cat'
  }, {
    name: 'Layla',
    species: 'cat'
  }, {
    name: 'Bogie',
    species: 'dog'
  }
];

console.log(whosASpecial(specialPets));
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!