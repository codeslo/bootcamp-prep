let pet = {
    "type": "dog",
    "age" : 6,
    "personality" : "obnoxious"
};

console.log(pet.hasOwnProperty("personality")); // true

console.log(pet.hasOwnProperty("job")); // false