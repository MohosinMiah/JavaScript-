/*

1. An object declaration with properties and method:
	var student = { 
		name : 'Mahmud', 
		age : 27, 
		calculateAge : function(yearOfBirth){
			codes.....
		} 
	};

2. A method is basically a function used within an object & we have to initiate a method call to 
   make it work just like we do for a regular function

3. 'this' keyword refers to the object within which it lives & 
   'this' can be used as an alias for the object:
     object.propertyName = this.propertyName

*/

// creating an object with property & method
var student = {
    name: 'Lubaba',
    job: 'Doctor',
    yearOfBirth: 1994,
    isMarried: false,
    family: ['Mahmud', 'Niha', 'Banna'],
    calculateAge: function () {
        return 2018 - this.yearOfBirth; // this keyword refers to the object 'student' here
    }
};

// calling the object method and assiging it to a variable to store it's value
var age = student.calculateAge();

// adding a new property & it's value to the object 
student.age = age;

// outputing the object elements
console.log(student);
// outputs: { name: "Lubaba", job: "Doctor", yearOfBirth: 1994, isMarried: false, family: […], calculateAge: calculateAge(), age: 24 }

// creating an object with property & method
var doctor = {
    name: 'Tasfia',
    job: 'Teacher',
    yearOfBirth: 1992,
    isMarried: false,
    family: ['Riyan', 'Mona', 'Banna'],
    calculateAge: function (yearOfBirth) {
        this.age = 2018 - this.yearOfBirth;
        // As this.age refers to doctor.age, we are adding a new property and it's value to the doctor object with the statement  
    }
};

// accessing or calling the object method
doctor.calculateAge();

// outputing the object elements
console.log(doctor);
// outputs: { name: "Tasfia", job: "Teacher", yearOfBirth: 1992, isMarried: false, family: […], calculateAge: calculateAge(), age: 26 }
