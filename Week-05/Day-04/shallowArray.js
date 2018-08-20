function makeShallowCopy(arr){
    return arr.slice();
}

let firstArr = [1,2,3,4];
let firstArrClone = makeShallowCopy(firstArr); // no problem

let secondArr = [1,2,[3,4,5]];
let secondArrClone = makeShallowCopy(secondArr); // now there's a problem

firstArr.push(5);
//console.log("firstArr: "+firstArr); // logs [1,2,3,4,5]
// console.log("firstArrClone: "+firstArrClone); // logs [1,2,3,4] awesome.

//console.log(secondArr);
secondArrClone[2].push(6);

console.log(secondArr); // WTF (what the factor?)
