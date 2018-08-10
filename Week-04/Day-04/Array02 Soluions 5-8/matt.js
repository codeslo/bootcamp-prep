let me = {
    "firstName": "Matt",
    "lastName" : "West",
    "profession" : "Software Engineer",
    "superpower" : null
};

console.log(me.firstName);

let name = me.firstName;
let fullName = me.firstName + " " + me.lastName;
console.log(fullName);

console.log(me.hasOwnProperty("superpower"));

me.superpower = "flight";

console.log(me.superpower);