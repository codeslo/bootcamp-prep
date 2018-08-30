// Write a function, getLongestName, that takes an object. The object represents a family tree. Return the longest name in the family.
function getLongestName(obj,names =[]){
    for(let key in obj){
        if(obj[key]){
            names.push(key);
            getLongestName(obj[key],names);
        }else{
            names.push(key);
        }
    }
   return names.sort((a,b) => b.length - a.length)[0];
}

let family = {
    'Beverly Marquez': {
      'Nina Rhone': {
        'William Rhodes': null,
        'Paul Nell': null,
        'Sir Paddington the Fourth, of the county Wilstonshire': null
      }
    }
  };
  
  console.log(getLongestName(family)); // => 'Sir Paddington the Fourth, of the county Wilstonshire'