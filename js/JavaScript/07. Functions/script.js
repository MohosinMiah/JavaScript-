/*
The difference between Function declaration and Function expression is how the browser loads them 
into the execution context.
    a) Function declarations load before any code is executed.
    b) Function expressions load only when the interpreter reaches that line of code.
*/

// function declaration

decFunc(); // outputs the codeblock as the interpreter recignises function declaration
function decFunc() {
    console.log("This is a function declaration");
}

// function expression

expFunc(); // throws error as the interpreter can't recignise function expression
var expFunc = function () {
    console.log("This is a function expression");
}

// basic function with return statement

function calculateAge(birthYear) {
    var age = 2018 - birthYear;
    return age;
}

var MikeAge = calculateAge(1990);
var JohnAge = calculateAge(1995);

console.log(MikeAge); // outputs: 28
console.log(JohnAge); // outputs: 23

// calling a function within another function

function yearsUntilRetirement(name, year) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement >= 0) {
        console.log(name + " has " + retirement + " years to retire");
    } else {
        console.log(name + " has retired " + -(retirement) + " years before");
    }
}

yearsUntilRetirement("Mike", 1950); // Mike has retired 3 years before

yearsUntilRetirement("John", 1980); // John has 27 years to retire
