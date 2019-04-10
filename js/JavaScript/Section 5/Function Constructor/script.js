/*

1. Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function.

2. To create an object instance from a parent object, we utilize the constructor 
function to access the prototype property of that parent object.

3. In a constructor function 'this' keyword does not have a value. It is a substitute for the 
new object instance. The value of 'this' will become the new object instance when a 
new object instance is created

*/

// creating a object constructor function

function Student(name,dept,age){
	this.name = name; // this.name = objectInstance.name
	this.dept = dept; // this.dept = objectInstance.dept
	this.age = age; // this.age = objectInstance.age
	this.birthYear = function(){
		return 2018-this.age;
	}
}

// instantiating 'maria' object from the 'Student' object constructor function
var maria = new Student("Maria","BBA",22);

// outputing 'maria' objects property
console.log("Student's name: " + maria.name + " Dept: " + maria.dept + " Age: " + maria.age + " Birth year: " + maria.birthYear());

// instantiating 'john' object from the 'Student' object constructor function
var john = new Student("John","CSE",25);

// outputing 'john' objects property
console.log("Student's name: " + john.name + " Dept: " + john.dept + " Age: " + john.age + " Birth year: " + john.birthYear());


// Prototype Inheritance

// constructor function

var Teacher = function(name,birthYear){
	this.name = name;
	this.birthYear = birthYear;
	this.age = function(){
		return 2018-this.birthYear;
	}
}

// Adding property to the constructor using Prototype Property
Teacher.prototype.retirementAge = 70;

// Adding method to the constructor using Prototype Property
Teacher.prototype.eligibleToTeach = function(){
	console.log(this.retirementAge-this.age());
}

var smith = new Teacher("Mr. Smith", 1960);
smith.eligibleToTeach(); // output: 12

