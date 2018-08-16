let myObj = {
    name:"Joe",
    age:25,
    getAge: function(){
        return this.age;
    }
};

console.log(myObj.getAge());