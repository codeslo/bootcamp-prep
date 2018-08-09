function logKeyValuePairs(obj){
    for(let key in obj){
        console.log(key + ":" +obj[key]);
    }
}

let obj01 = {'word':'hello','number':3,'place':'San Luis Obispo'};

let obj02 = {'word':'bird','number':6,'place':'Atascadero'};

let obj03 = {'word':'awesome','number':17,'place':'Morro Bay'};

logKeyValuePairs(obj01);

logKeyValuePairs(obj02);

logKeyValuePairs(obj03);