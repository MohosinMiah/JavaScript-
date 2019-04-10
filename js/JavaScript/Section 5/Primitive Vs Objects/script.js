/*

The concept of passing variables in javasctript is a bit complicated. Both primitives and 
objects are passed by value.
However, the value for objects is a reference to that object in memory.

a) When you pass a primitive to a function, a new independent copy is passed that's why the original value is not changed 
b) When you pass an object to a function, a copy of reference to that object is passed that's why the original value is overriden

*/

var age = 26;

var obj = {
	name : "Mahmud",
	city : "Dhaka"
}

function change(age,obj){
	age = 30;
	obj.city = "Chittagong";
	console.log("Inside the function: " + "Age is: " + age + " City is: " + obj.city);
    // output: Before calling: Age is: 26 City is: Dhaka
}

console.log("Before calling: " + "Age is: " + age + " City is: " + obj.city);
// output: Inside the function: Age is: 30 City is: Chittagong

change(age,obj);

console.log("After calling: " + "Age is: " + age + " City is: " + obj.city);
// output: After calling: Age is: 26 City is: Chittagong