// myLastIndexOf should return the last index at which the searchValue appears in the array.

// If the searchValue isn't in the array, myLastIndexOf should return -1.

// If startIdx is defined, myLastIndexOf should start looking for the seachValue at that index, and then move toward the front of the array as it looks for the value.

// EDIT: This is a valid solution that accounts for a zero or a negative number being passed as a startIdx

function myLastIndexOf(arr, sv, startIdx = -1) {
    let myArr = arr;

    if(startIdx > -1){
        myArr = myArr.splice(0,startIdx+1);
    }

    if(!myArr.includes(sv)){
        return -1;
    }

    for(let i = myArr.length -1; i >=0;  i--){
        if(myArr[i] === sv){
            return i;
        }
    }
}

console.log(myLastIndexOf([1,2,3,4,1,2,3,4],4));