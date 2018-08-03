function getGrades(percentage) {
    if (percentage > 100) {
        return "Error, percentage cannot be over 100.";
    }

    if (percentage > 89) {
        return "A";
    } else if (percentage > 80) {
        return "B"
    } else if (percentage > 70) {
        return "C";
    } else if (percentage > 60) {
        return "D";
    } else {
        return "F";
    }
}

console.log(getGrades(102)); // expect error
console.log(getGrades(75)); // expect B