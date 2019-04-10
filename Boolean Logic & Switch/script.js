/*

The boolean logic operators are:

1. && (both conditions must be true)
2. || (one of the conditions must be true)
3. != (not equal to any condition)

*/

// using boolean logic operators in if/else statement

var salary = 500;

if (salary > 500) {
    console.log("He is rich");
} else if (salary > 400 && salary < 500) {
    console.log("He is aristrocat");

} else if (salary > 400 || salary < 500) {
    console.log("He is middleclass");
} else {
    console.log("He is poor")
}

// using switch statement instead of if/else statement

var job;
job = prompt("What's his profession?")

switch (job) {
    case "teacher":
        console.log("He is a teacher.");
        break;

    case "doctor":
        console.log("He is a doctor");
        break;

    case "cop":
        console.log("He is a cop.");
        break;

    default:
        console.log("He is unemployed");
}
