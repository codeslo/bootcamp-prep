// old

function addSalesTax(arr,taxRate){
    let result = [];
    arr.forEach(function(element){
        result.push(Math.round((element + (element * taxRate))*100)/100);
    });
    return result;
}

console.log(addSalesTax([1.00,2.25,5.75,1.75],.0775));

// new

function newAddSalesTax(arr,taxRate){
    return arr.map(e => Math.round((e + e * taxRate) *100)/100);
}

console.log(newAddSalesTax([1.00,2.25,5.75,1.75],.0775));
