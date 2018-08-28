// fizzbuzz is a classic coding questions. 
//Numbers divisible by 3 are replaced by "fizz"
// Numbers divisible by 5 are replaces by "buzz"
// Numbers divisible by 3 and 5 are replaces by "fizzbuzz"

let nums = [1,2,3,4,5,10,15,20];

let fb = nums.map((e) => {
    if(e % 3 === 0 && e % 5 === 0){
        e = "fizzbuzz";
    }else if(e % 3 === 0){
        e = "fizz";
    }else if(e % 5 === 0){
        e = "buzz";
    }
    return e; // necessary to add e to new array
});

console.log(nums); // not mutated
console.log(fb);