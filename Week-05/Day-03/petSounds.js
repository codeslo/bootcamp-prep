// Write a function petSounds that takes an animal name and a country name.

// Using the globally-defined animalNoises array, petSounds should return a sentence that explains which sound the animal makes in the given country.

function petSounds(animalName,country){
    let animal;
    let sound = "";
    for(let i = 0; i < animalNoises.length; i++){
        if(animalNoises[i].hasOwnProperty(animalName)){
            animal = animalNoises[i][animalName];
            for(let key in animal){
                if(key === country){
                    sound = animal[country];
                    break; // ends loop
                }
            }
        }
    }
    animalName = animalName[0].toUpperCase() + animalName.slice(1);
    return animalName + "s in "+country+" say "+sound;
}

let animalNoises = [
    { 'dog': {
      'America' : 'Woof! Woof!',
      'Germany' : 'Wau Wau!',
      'England' : 'Bow wow!',
      'Uruguay' : 'Jua jua!',
      'Afrikaans' : 'Blaf!',
      'Korea' : 'Mong mong!',
      'Iceland' : 'Voff voff!',
      'Albania' : 'Ham!',
      'Algeria' : 'Ouaf ouaf!'
      }
    },
    { 'cat': {
      'America' : 'Meow',
      'Germany' : 'Miauw!',
      'England' : 'mew mew',
      'Uruguay' : 'Miau Miau!',
      'Afrikaans' : 'Purr',
      'Korea' : 'Nyaong!',
      'Iceland' : 'Kurnau!',
      'Albania' : 'Miau',
      'Algeria' : 'Miaou!'
      }
    },
    { 'chicken': {
      'America' : 'Cluck cluck',
      'Germany' : 'tock tock tock',
      'England' : 'Cluck Cluck',
      'Uruguay' : 'gut gut gdak',
      'Afrikaans' : 'kukeleku',
      'Korea' : 'ko-ko-ko',
      'Iceland' : 'Chuck-chuck!',
      'Albania' : 'Kotkot',
      'Algeria' : 'Cotcotcodet'
      }
    }
  ];

console.log(petSounds('dog', 'Iceland')); // => Dogs in Iceland say Voff voff!

console.log(petSounds('cat', 'Korea')); // => Cats in Korea say Nyaong!