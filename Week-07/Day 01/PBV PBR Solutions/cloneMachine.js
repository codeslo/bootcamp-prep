// Write a function cloneMachine, that, given an animal (represented as an object), returns a clone of the original animal.

// The name of the clone should be the name of its parent, concatenated with the word 'Clone'.

// cloneMachine should also push the name of the clone to the parent's offspring array.
function cloneMachine(animal){
    let clone = JSON.parse(JSON.stringify(animal));
    clone.name += 'Clone';
    animal.offspring.push(clone.name);
    return clone;
}



let dolly = {
    name: 'Dolly',
    species: 'sheep',
    offspring: []
  }
  
  let dollyClone = cloneMachine(dolly);
  
  console.log(dollyClone) // {name: 'DollyClone', species: 'sheep', offspring: []}
  console.log(dolly) // {name: 'Dolly', species: 'sheep', offspring: ['DollyClone']}