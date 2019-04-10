/*

1. array can be declared in 2 ways:
	a. var names = ['John', 'Niha', 'Mark'];
	b. var names = new Array('John', 'Niha', 'Mark');

2. an array element is declared through index number :
	names[2] 

3. we can override an array element by assigining a new element to the index number :
	names[2] = 'Sophia'

4. push() adds a new element at the end of an array

5. pop() deletes the last element of an array

6. unshift() adds a new element at the beginning of an array

7. shift() deletes the first element of an array

8. indexOf() returns index number of an array element

N.B. indexOf() returns -1 when an element is not found in the array.
The reason it returns -1 instead of "false" is that the first element at the beginning of array would be at position 0, which is equivalent to false in Javascript.
So returning -1 ensures that you know there is not actually a match.

*/

// declaring array (Method:1)
var names = ['John', 'Niha', 'Mark'];
console.log(names); // outputs: ["John", "Niha", "Mark"]

// declaring array (Method:2)
var years = new Array(1990, 2010, 1245, 2080);
console.log(years); // outputs: [1990, 2010, 1245, 2080]

// outputing an array element through index number
var student = ['Amanda', 01, 'Psychology', true];
console.log(student[3]); // outputs: true

// we can override an element by assigining the index number a new element
student[2] = 'Anthropology';
console.log(student); // outputs: ["Amanda", 1, "Anthropology", true]

var player = ['Mark', 'Wagh', 1970, 'cricketer', true];

// adds a new element at the end of an array
player.push('Sydney')
console.log(player); // outputs: ["Mark", "Wagh", 1970, "cricketer", true, "Sydney"]

// deletes the last element of an array
player.pop();
console.log(player); // outputs: ["Mark", "Wagh", 1970, "cricketer", true]

// adds a new element at the beginning of an array
player.unshift('Mr.');
console.log(player); // outputs: ["Mr.", "Mark", "Wagh", 1970, "cricketer", true]

// deletes the first element of an array
player.shift();
console.log(player); // outputs: ["Mark", "Wagh", 1970, "cricketer", true]

// indexOf() returns index number of an array element
console.log(player.indexOf('cricketer')); // // returns 3

// indexOf() returns -1 when an element is not found in the array

console.log(player.indexOf('footballer')); // returns -1
