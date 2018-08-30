// Write a function billerBuilder that takes the name of a state as a parameter. billerBuilder should return a new function that takes the price of an item and returns the correct final price of the item, given the following:

// if NY, charge 3% for shipping and 4% for sales tax
// if NJ, charge 5% for shipping and 6.625% for sales tax
function billerBuilder(state){
    function biller(itemPrice){
        let taxSubtotal = 0;
        let shipSubtotal = 0;
        if(state === 'NY'){
            tax = 1.04;
            ship = 1.03;
        }else if(state === "NJ"){
            tax = 1.06625;
            ship = 1.05;
        }
        return itemPrice * tax * ship;
    }
    return biller;
}



let newYorkBiller = billerBuilder('NY');
console.log(newYorkBiller(100)); // => 107.12 (100 * 1.03 * 1.04)

let newJersBiller = billerBuilder('NJ');
console.log(newJersBiller(100)); // => 111.95625 (100 * 1.05 * 1.06625)