function closureFactory(){
    let outerVariable = "This is in the local scope of closureFactory, but I can still see it!";
    function innerFunc(){
        return outerVariable;
    }
      return innerFunc;
}

let myClosure = closureFactory();
console.log(myClosure());
