


function greetingStudent(studentName) {
    console.log("Hi, " + studentName + "! Let's review your notes.")
}


function addFourNumbers(noteA, noteB, noteC, noteD) {
    return noteA + noteB + noteC + noteD
}


function calculateNotes(noteA, noteB, noteC, noteD) {
    let total = noteA + noteB + noteC + noteD;
    total = total / 4;
    return total;
}



function gradeStudent(noteA, noteB, noteC, noteD, studentName) {
    greetingStudent(studentName);
    let average = calculateNotes(noteA, noteB, noteC, noteD);
    if (average >= 11) {
        console.log("Congratulations, " + studentName + "! Your average is: " + average)
    } else if (average >= 6) {
        console.log("Good job, " + studentName + "! Your average is: " + average)
    } else {
        console.log("I am sorry " + studentName + "! Your average is: " + average + ", you need to retake the course")
    }
}


console.log(gradeStudent(12, 10, 11, 12, "Peter"));
console.log(gradeStudent(11, 8, 8, 9, "Molly"));
console.log(gradeStudent(4, 11, 8, 6, "Enriqueta"));
console.log(gradeStudent(2, 6, 4, 3, "Palante"));

