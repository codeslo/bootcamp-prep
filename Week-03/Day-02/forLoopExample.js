// a loop that counts to twenty in the console
for(let i = 1; i<=20; i++){
    console.log(i);
}

let myArr = ['JavaScript','is','awesome','!!!'];

// a for loop that iterates through myArr and logs each element
for (let i = 0; i < myArr.length; i++){
    console.log(myArr[i]);
}

let foods = ['chocolate','broccoli','potato','chocolate','spinach','apple','chocolate','peas'];
let myFavoriteFoods = [];
let otherFoods = [];

// a loop that iterates through foods, adds chocolate to myFavoriteFoods, and everything else to otherFoods
for(let i = 0; i<foods.length; i++){
    if(foods[i] === 'chocolate'){
        myFavoriteFoods.push(foods[i]);
    }else{
        otherFoods.push(foods[i]);
    }
}

console.log(myFavoriteFoods);
console.log(otherFoods);
