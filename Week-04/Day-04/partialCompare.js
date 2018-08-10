function compare(obj1,obj2){
    for(let key in obj1){
        if(obj2.hasOwnProperty(key)){
            if(obj1[key] === obj2[key]){
                // do something
            }
        }
    }

    for(let key in obj2){
        // basically the same
    }
}