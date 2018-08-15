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

function attendanceCheck(day) {
    let result = []; // we need to return an array of names

    // logically, this gnarly array has multiple layers. The outermost is the base
    // 'classRoom' array
    let studentObject = []; // then comes an object bearing a students name
    let studentName = ""; // we'll need that name for our result array
    let studentDays = []; // next layer is an array of day names
    let dayOfWeek = {}; // each element in studentDays is an object with a day name key and a boolean value

    for (let i = 0; i < classRoom.length; i++) {
        // grab the student object from the classroom array
        studentObject = classRoom[i];
        // grab the only property in each object
        for (let key in studentObject) {
            studentName = key;
            studentDays = studentObject[studentName];
            // iterate through the studentDays array.
            for (let j = 0; j < studentDays.length; j++) {
                dayOfWeek = studentDays[j];
                // look for the correct day
                if (dayOfWeek.hasOwnProperty(day)) {
                    // once we have the correct day, check it's boolean value
                    if (dayOfWeek[day]) {
                        result.push(studentName);
                    }
                }
            }
        }
    } // end outer loop

    return result;
}
console.log(attendanceCheck('Monday')); // => ['Marnie', 'Shoshanna']

console.log(attendanceCheck('Wednesday')); // => ['Marnie', 'Lena']