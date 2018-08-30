// an example of a crazy thing you an do with closures
function disappearingFunction(){
    let counter = 3;
    function innerFunc(){
        if(counter > 0){
            let result = counter;
            counter--;
            return result;
            
        }
    }
    return innerFunc;
}

let vanisher = disappearingFunction();
let vanisher2 = disappearingFunction();

console.log(vanisher()); // 3
console.log(vanisher()); // 2
console.log(vanisher()); // 1
console.log(vanisher2());
console.log(vanisher()); // undefined
