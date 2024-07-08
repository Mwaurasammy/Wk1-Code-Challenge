const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function speedDetector(speed) {
    const speedLimit = 70;
    const kmAboveSpeed = 5;

    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        const points = Math.floor((speed - speedLimit) / kmAboveSpeed);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log(`points: ${points}`);
        }
    }
}

rl.question("Enter speed: ", (input) => {
    const speed = parseFloat(input);
    speedDetector(speed);
    rl.close();
})