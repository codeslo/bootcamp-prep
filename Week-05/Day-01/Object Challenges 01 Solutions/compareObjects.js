// Define a function, compareObjects, that accepts two objects as arguments.

// compareObjects should return true if both objects have exactly the same key/value pairs. Otherwise, compareObjects should return false. Assume the objects are not nested.
function compareObjects(obj1,obj2){

    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            if(obj1[key] !== obj2[key]){
                console.log('obj1.'+key+' does not equal obj2.'+key);
                return false;
            }
        }else{
            console.log('obj1 has '+key+' and obj2 does not');
            return false;
        }
    }

    for(let key in obj2){
        if(obj1.hasOwnProperty(key)){
            if(obj2[key] !== obj1[key]){
                console.log('obj2.'+key+' does not equal obj1.'+key);
                return false;
            }
        }else{
            console.log('obj2 has '+key+' and obj1 does not');
            return false;
        }
    }

    return true;

}


console.log(compareObjects({ name: 'nick' }, { name: 'nick' })); // -> true

console.log(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 })); // -> false