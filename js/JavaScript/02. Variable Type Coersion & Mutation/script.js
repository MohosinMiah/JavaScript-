/*

1. When we have different data types and we mix them together javaScript automatically figures out which data type it should convert and then convert them all to the same data type. This process is called type coersion

2. JavaScript is a dynamically typed language & it's variable's values can be changed at a later time which is known as variable mutation

3. The prompt() method displays a prompt box which ask the user for some sort of inputs

4. The alert() method displays an alert box with a specified message

*/

// converting number to string (example of type coersion) 

var name = "John";
var age = 25;
console.log(name + age); // outputs: John25

// changing the original values of variables (example of variable mutation) 

// assigning variable values
var firstName, job, isMarried;
firstName = "George";
job = "Teacher";
isMarried = true;

// outputing values
console.log(firstName + " " + " " + job + " " + isMarried); // outputs: George Teacher true

// assigning new values to variable
firstName = "Mark";
job = "Programmer";

// outputing new values
console.log(firstName + " " + " " + job + " " + isMarried); // Mark  Programmer true

// example of prompt()
var country = prompt('What\'s Your country?');
console.log(country); // displays a prompt box

// example of alert()
alert('My country is Bangladesh'); // displays an alert box
