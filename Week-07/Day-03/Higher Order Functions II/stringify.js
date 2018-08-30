// Define a function, stringify, that takes a callback and returns a new function. When the new function is called, it should call the callback, and return the value returned by the callback, but not before explicitly coercing the returned value to a string.

function stringify(callback){
    function innerFunc(){
       return callback() + '';
    }
    return innerFunc;
}

function returnsANumber() {
    return 100;
  }
  
  let newFunction = stringify(returnsANumber);
  console.log(newFunction()); // => '100'