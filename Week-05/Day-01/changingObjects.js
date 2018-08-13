// creating, updating, and deleting object properties

let myObj = {
    city: "Atascadero",
    state: "California"
}

// create new property
myObj.county = "San Luis Obispo";

// update property
myObj.city = "Morro Bay";

// delete property
delete myObj.state;

console.log(myObj); // expect {city: "Morro Bay",county: "San Luis Obispo"}


