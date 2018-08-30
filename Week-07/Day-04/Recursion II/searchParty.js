// Write a function, searchParty, that accepts a name and a world object. The keys in the world objects describe a location. The values can be any combination of strings, arrays, or other objects.

// Search through the whole world for the given name. Return an array with directions to the person if you find them. Return null if you can't find them.
function searchParty(name,obj) {
    function flatten(arr,flat =[]){
    
        for(let i = 0; i < arr.length;i++){
            if(Array.isArray(arr[i])){
                flatten(arr[i],flat);
            }else{
                flat.push(arr[i]);
            }
        }
        return flat;
    }
    for(let key in obj){
        let item = obj[key];
        if(typeof item === 'string'){
            if(item === name){
                return[key];
            }
        }else if(Array.isArray(item)){
            if(item.includes(name)){
                return[key];
            }
        }else{ // it's another object
            let childObject = obj[key];
            let searchResult = searchParty(name,childObject);
            if(searchResult){
                return flatten([key,searchResult]);
            }
        }
    }
    
    return null;
    
}


let world = {
    'Fullstack': {
        '11th floor': 'Marge',
        '25th floor': 'Francis'
    },
    'Subway': ['Jackie', 'Grumio']
};

console.log(searchParty('Francis', world)); // => ['Fullstack', '25th floor']
console.log(searchParty('Franco', world)); // => null