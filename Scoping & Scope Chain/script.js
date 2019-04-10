/*

1. Scope determines the accessibility of variables. There are 3 types of scope in JS

a. Local scope:
	A variable declared within a JavaScript function, becomes LOCAL to the function.
	They can only be accessed within the function.

b. Global scope:
	A variable declared outside a JavaScript function, becomes GLOBAL to the function.
	They can be accessed from anywhere of the script.

c. Lexical scope:
    When a function is defined in another function lexical scoping occurs. In lexical scope:
     -The inner function has access to the outer function's variables but
     -The outer function does not have access to the inner function's variables. 

*/

var a = "Hello! ";

first();

function first(){
	var b = "Hi! ";

	// produces error since the outer function can't access inner function's variable
    console.log('Accessing from first function: ' +c); // produces an error
	
	second();

	function second(){
		var c = "Hey! ";
		// the inner function can access outer function's variable
		console.log('Accessing from second function: ' +a+b+c); // outputs Hello! Hi! Hey!
	}
}



