// Define a function, attendanceCheck, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.

function attendanceCheck(dayOfWeek){
    let result = [];
    let student = {};
    let studentName = "";
    let days = [];
    let day; // boolean

    for(let i = 0; i < classRoom.length; i++ ){
        student = classRoom[i];
        for(let key in student){
            studentName = key;
        }
        days = student[studentName];
        console.log(days);

        
        
    
    }
 return "TODO";

}



let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']

console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']