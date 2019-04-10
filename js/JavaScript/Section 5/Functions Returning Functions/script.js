/*
In javaScript, we can return a function from another function as functions are first class
*/

// creating a function
function marks(grade){
	if (grade == 90) {
		return function(name){
			console.log(name + " got A grade");
		}
	} else if(grade == 80){
		return function(name){
			console.log(name + " got B grade");
		}
	} else {
		return function(name){
			console.log(name + " got poor grade");
		}
	}
}

// storing function in a variable
var resultOne = marks(90);
// calling the function (works like a function expression)
resultOne('John');

// storing function in a variable
var resultTwo = marks(80);
// calling the function (works like a function expression)
resultTwo('Maria');

// calling the function without storing it to a variable. Both functions are executed sequentially from left to right
marks(90)("Sophia");