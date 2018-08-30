// Write a function, theTruthCounts, that accepts a multi-dimensional array of values. theTruthCounts should return the count of all truthy values inside the multidimesional array.
function theTruthCounts(arr,count = []){
    arr.forEach(e => {
        if(Array.isArray(e)){
            theTruthCounts(e,count);
        }else{
            if(e){
                count.push(e);
            }
        }
    });
    return count.length;
}


console.log(theTruthCounts([0, [true, ['yes']]])); // => 2


