// Define a function, attendanceCheck, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, attendanceCheck should return a new array with only the names of the students present on the inputted day of the week.

// this one is pretty gnarly. An array containing objects that contain an array than contains objects

let classRoom = [{
        "Marnie": [{
                "Monday": true
            },
            {
                "Tuesday": true
            },
            {
                "Wednesday": true
            },
            {
                "Thursday": true
            },
            {
                "Friday": true
            }
        ]
    },
    {
        "Lena": [{
                "Monday": false
            },
            {
                "Tuesday": false
            },
            {
                "Wednesday": true
            },
            {
                "Thursday": false
            },
            {
                "Friday": true
            }
        ]
    },
    {
        "Shoshanna": [{
                "Monday": true
            },
            {
                "Tuesday": true
            },
            {
                "Wednesday": false
            },
            {
                "Thursday": true
            },
            {
                "Friday": false
            }
        ]
    },
    {
        "Jessa": [{
                "Monday": false
            },
            {
                "Tuesday": false
            },
            {
                "Wednesday": false
            },
            {
                "Thursday": false
            },
            {
                "Friday": true
            }
        ]
    }
];

function attendanceCheck(d) {
    let result = [];
    classRoom.forEach(function (studentObject) {
        for (let student in studentObject) {
            if (studentObject[student].filter(day => day.hasOwnProperty(d))[0][d]) {
                result.push(student);
            }
        }
    });
    return result;
}

console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']

console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']