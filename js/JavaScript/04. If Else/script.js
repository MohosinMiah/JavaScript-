// basic if/else statement

var name = "John";
var isMarried = "no";

if (isMarried == "yes") {
    console.log(name + " is married.");
} else {
    console.log(name + " is not married yet."); // outputs: John is not married yet.
}

/* 
since we have set a boolean value it will execute the if{...} block whenever true is set & else{...} block whenever
false is set
*/

isMarried = true;

if (isMarried) {
    console.log(name + " is married."); // outputs: John is not married.
} else {
    console.log(name + " is not married yet.");
}

/* 
comparison operator == only checks the value so javaScript converts string '20' to number 20 and the if condition becomes true
*/

if (20 == "20") {
    console.log("It's okay"); // outputs: It's okay
} else {
    console.log("It's not okay");
}

/* 
comparison operator === checks the value & datatype also so even if javaScript converts string '20' to number 20, the data type isn't matched and the if condition becomes false
*/

if (20 === "20") {
    console.log("It's okay")
} else {
    console.log("It's not okay"); // outputs: It's not okay
}
