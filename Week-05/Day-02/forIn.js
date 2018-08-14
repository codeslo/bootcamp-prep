let car = {
    make: "Honda",
    model:"Civic",
    year: 2014,
    color: "white",
    price: 9000,
    inStock: true

};

for(let key in car){
    console.log(key); // logs the strings make, model, year, etc
    console.log(car[key]); // logs the value of each property. Honda, Civic, 2014, etc

}

// logging key/value pairs is just string concatenation
for(let key in car){
    console.log(key + ":" + car[key]);
}
