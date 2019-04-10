/*

The execution order will be from bottom to top:

	a. From 3rd function: Hey john

	b. From 2rd function: Hi john

	c. From 1st function: Hello john

*/

var name = 'john';

function first(){
	var a = 'Hello ';
	second();
	var x = a+name;
	console.log("From 1st function: " + x)
}

function second(){
	var b = 'Hi ';
	third();
	var z = b+name;
	console.log("From 2rd function: " + z)
}

function third(){
	var c = 'Hey ';
	var z = c+name;
	console.log("From 3rd function: " + z)
}

first();

