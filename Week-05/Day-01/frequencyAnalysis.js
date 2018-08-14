// Define a function frequencyAnalysis that accepts a string of lower-case letters.

// frequencyAnalysis should return an object containing the count for each letter in the string.

function frequencyAnalysis(str){
    let result = {};
    let letter = '';
    //let count = 0;
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        letter = arr[i];
        if(result.hasOwnProperty(letter)){
            result[letter]++;
        }else{
            result[letter] = 1;
        }
        
    }

    return result;
}

console.log(frequencyAnalysis('abcda'));