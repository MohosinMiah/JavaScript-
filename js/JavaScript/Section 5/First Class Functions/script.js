/*

JavaScript functions are first class that means everything we do with other data types 
can be done with javaScript. We can use them as strings, numbers
(pass them as parameter, set vaiables equal to them & put them in array etc.)

In simple term, first class functions act as a Value.

reference: https://www.youtube.com/watch?v=D4UUe2C7nFU
reference: https://www.youtube.com/watch?v=1ieC6JZmF5w

*/

// function declaration

function greet(){
	console.log("Hello World");
}

greet();

// first class function example

function logGreet(el){
	el();
}

// passing the 'greet' function as a parameter to 'logGreet' function
logGreet(greet); 

// function expression

var greetMe = function(){
	console.log("Hi Mahmud");
}

// passing the 'greetMe' function as a parameter to 'logGreet' function
logGreet(greetMe); 

// using the function expression as an argument

logGreet(function(){
	console.log('Hi There');
});