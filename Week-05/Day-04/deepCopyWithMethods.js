function reallyDeepCopy(obj){
    let clone = JSON.parse(JSON.stringify(obj));
    console.log(clone);
    // rebuild methods
    for(let key in obj){
        if(typeof obj[key] === 'function'){
            clone[key] = obj[key];
        }
    }
    return clone;
};

let testObj = {
    prop1: "apple",
    prop2: "carrot",
    prop3: [1,2,3,4],
    getProps: function(){
        return [this.prop1,this.prop2,this.prop3];
    }
}


console.log(testObj.getProps());

let testClone = reallyDeepCopy(testObj);
testClone.prop3 = ['just this one thing']; // objects should not pass this by refernce
console.log(testClone.getProps()); // should log different things for each object