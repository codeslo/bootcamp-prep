function closureFactory(){
    let outerVariable = "This is in the local scope of closureFactory, but I can still see it!";
    function innerFunc(){
        return outerVariable;
    }
      return innerFunc;
}

//console.log(outerVariable); // undefined

let myClosure = closureFactory();
let myClosure2 = closureFactory();
//console.log(myClosure());

// console.log(myClosure);