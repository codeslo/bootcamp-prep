// Define a function frequencyAnalysis that accepts a string of lower-case letters.

// frequencyAnalysis should return an object containing the count for each letter in the string.
function frequencyAnalysis(str){
    let result = {};
    for(let i = 0; i < str.length; i++){
        if(result.hasOwnProperty(str[i])){
            result[str[i]] ++;
        }else{
            result[str[i]] = 1;
        }
        
    }

    return result;
}





console.log(frequencyAnalysis('abca')); // => {a: 2, b: 1, c: 1})