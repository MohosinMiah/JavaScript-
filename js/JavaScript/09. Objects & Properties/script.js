/*

1. An object declaration with properties:
	var student = { name : 'Mahmud', age : 27 };

2. We can access an object's specific property's value in 2 different ways:
	a. console.log(student.name)
	b. console.log(student['age'])

3. We can assign & override an object's element by assigining new values to properties in 2 ways:
	a. student.name = 'Lubaba';
    b. student['job'] = 'Doctor';

*/

// declaring an object with properties (Method:1)

var student = {
    name: 'Mahmud',
    age: 27,
    job: 'Programmer',
    hasGf: true
};

// overriding object elements by assigining new values to properties
student.name = 'John';
student['job'] = 'Doctor';

// outputing object elements
console.log(student); // outputs: {name: "John", age: 27, job: "Doctor", hasGf: true}

// accessing the object's specific property's value (Method:1)
console.log(student.name); // outputs: John

// accessing the object's specific property's value (Method:2)
console.log(student['job']); // outputs: Doctor

// We can also assign a property to a new variable to store it's value
var profession = 'job';
console.log(student[profession]); // outputs: Doctor

// declaring an object with properties (Method:2)

// empty object
var player = new Object();

// assigning property and value to the empty object

player.name = 'Mark';
player.age = 30;
player['job'] = 'Footballer';
player['hasGf'] = false;

// outputing object elements
console.log(player); // outputs: {name: "Mark", age: 30, job: "Footballer", hasGf: false}
