let arr1 = [1,2,[3],[4,5],[6,7]];

function flatten(arr,flat =[]){
    for(let i = 0; i < arr.length;i++){
        if(Array.isArray(arr[i])){
            flatten(arr[i],flat);
        }else{
            flat.push(arr[i]);
        }
    }
    return flat;
}

console.log(flatten(arr1));