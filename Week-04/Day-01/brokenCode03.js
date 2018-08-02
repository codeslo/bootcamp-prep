function brokenCode03(arr){
    const categories = ['Last Name','First Name','Phone','City'];
    let result = '';
    for(let i = 0;i < arr.length; i++){
        result += categories[i] + ":" + i;
    }

    return result;
}

let personInfo = brokenCode03([Scary,Carrie,'805.544.1222 Atascadero']);
console.log(personInfo); // expect "Last Name: Scary, First Name: Carrie, Phone: 805.544.1222,City: Atascadero";