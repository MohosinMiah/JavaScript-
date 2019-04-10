// basic function with return statement

function calculateAge(birthYear) {
    var age = 2018 - birthYear;
    return age;
}

var MikeAge = calculateAge(1990);
var JohnAge = calculateAge(1995);

console.log(MikeAge);
console.log(JohnAge);

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

yearsUntilRetirement("Mike", 1950);

yearsUntilRetirement("John", 1980);
