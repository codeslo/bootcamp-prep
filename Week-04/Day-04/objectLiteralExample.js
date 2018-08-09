// objects store data in key/value pairs. The key is a string, the value can be anything. Strings, numbers, arrays, even other objects.

let student = {
    "firstName" : "Mary",
    "lastName"  : "Berry",
    "dob": "11/28/1993",
    "age":  24,
    "phoneNumber" : "805.522.4444",
    "email" : "mberry1993@gmail.com",
    "classes" : ["JavaScript 101", "Advanced HTML", "Advanced CSS", "SQL 101"]
}

// object data can be accessed using bracket notation...
console.log(student["firstName"]);

//... or using the more convenient dot notation
console.log(student.firstName); // note, no quotation marks necessary
// console.log(student."firstName");  => error

// if you use a variable name to access an object value, you always have to use bracket notation
let prop = "firstName";
console.log(student[prop]);

// dot notation doesn't work with variables
console.log(student.prop); // undefined

