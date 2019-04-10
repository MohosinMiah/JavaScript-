
/*

1. Hoisting is a javascript behaviour in which we can call a variable or a function before
using them. 

a. For functions:
	Code is scanned For function declaration. For each function a propety is 
	created in the window object that points to the function

b. For variables:
	Code is scanned For variable declaration. For each variable a propety is 
	created in the window object which is set to 'undefined'

2. Hoisting is not applicable for function expression. It produces an error

*/


// hoisting in function declaration

calculateAge(1980);

function calculateAge(year){
	console.log(2018-year);
}

// hoisting in function expression will produce an error 

retirementAge(2010);

var retirementAge = function(year){
	console.log(65-(2018-year));
}

// hoisting in variable (set to undefined by default)

console.log(age); // outputs 'undefined'
var age = 50;
console.log(age); // outputs 50




