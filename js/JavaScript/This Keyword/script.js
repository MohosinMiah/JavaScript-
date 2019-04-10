/*

1. Where does 'this' keyword points to?

	a. Regular function call: In a regular function call the 'this' keyword points 
	to the global object (the window object in the browser) 

	b. Method call: In a method call the 'this' keyword points to the object 
	that is calling the method

2. The 'this' keyword(variable) is only assigned a value as soon as an object calls a method

3. We can borrow one object's method and use it in another object. This process is known\
   as 'Method Borrowing'.

*/

// refers to the window object
console.log(this);

// 'this' in a regular function call
calculateAge(1990);

function calculateAge(year){
	console.log(2018-year);
	console.log(this); // refers to the 'window object' as it's inside a Regular function call
}

// 'this' in a method call

var student = {
	name : 'John',
	yearOfBirth : 1990,
	studentAge: function(){

		console.log(this); // refers to the 'student object' as it's inside a method call

		// since 'this' refers to the 'student' here so this.yearOfBirth = student.yearOfBirth
		console.log(2018-this.yearOfBirth); // outputs 28

		// declaring another function within the method

		function innerFunction(){
			console.log(this); // refers to the 'window object' as Js treats it as a Regular function call
		}

		innerFunction();

	}
}

student.studentAge();

// example of using 'this' keyword on the fly (only when the method is called)

// creating sophia object
var sophia = {
	name : 'Sophia',
	yearOfBirth : 2000,
	calcAge: function(){
		console.log(2018-this.yearOfBirth);
	}
}

// calling the method
sophia.calcAge(); // returns 18

// creating paul object
var paul = {
	name : 'Paul',
	yearOfBirth : 1995
}


// borrowing sophia's method to use it on paul
paul.calcAge = sophia.calcAge;

// calling the method
paul.calcAge(); // returns 23











