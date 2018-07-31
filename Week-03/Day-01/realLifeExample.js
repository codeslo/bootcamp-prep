var data = [];

for(let i = 0; i < 100; i++){
    data.push(i);
}

console.log(data);

console.log(data[2]);

for(let index = 0; index < 10; index++){
    console.log('Top ten deals number '+(index+1)+':'+data[index]);
}

