function closureFactory(){
    function innerFunction(){
        return "Hello from the closure factory innerFunction!";
    };

    return innerFunction; // note: no parenthesis. We're not calling the function, we're returning the function itself.
}
let myClosure = closureFactory();
console.log(typeof myClosure); // myClosure is a function
console.log(myClosure()); // we can call myClosure, like any function
