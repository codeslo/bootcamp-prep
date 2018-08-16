function deepCopy(arr){
    return JSON.parse(JSON.stringify(arr));
}


let firstArr = [1,2,[3,4,5]];
let firstArrClone = deepCopy(firstArr);

firstArrClone.push(5);

console.log(firstArrClone);

console.log(firstArr); // much better

