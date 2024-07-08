const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function to determine the grade based on marks
function studentGrade(marks) {
    // Check the range of marks and return the corresponding grade
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

function getMarks(){
    rl.question("Enter your marks: ", (input) => {
        const marks = parseInt(input);
        if(isNaN(marks) || marks < 0 || marks > 100){
            console.log("Enter valid marks between 0 to 100!");
            getMarks();
        }else{
            const grade = studentGrade(marks);
            console.log(`Your grade is: ${grade}.`);
            rl.close();
        }
    });
}
getMarks();
