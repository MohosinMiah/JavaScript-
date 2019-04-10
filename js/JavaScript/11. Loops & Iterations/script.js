/*

1. For loop works in the following sequence:
	Step 1: initializes an expression
	Step 2: checks the condition 
	Step 3: execute the codeblock if the condition is true
	Step 4: increment the expression value and repeat the above steps until the condition becomes false

2. While loop follows the same sequence as for loop

*/

// declaring an array
var names = ['John', 'Sophia', 'Mark', 'Kristina', 'Paul'];

// printing the array elements in sequential order (for loop)
for (var i = 0; i < names.length; i++) {
    console.log(names[i]); // outputs: John, Sophia, Mark, Kristina, Paul
}

// printing the array elements in reverse order (for loop)
for (var i = names.length - 1; i >= 0; i--) {
    console.log(names[i]); // ouputs: Paul, Kristina, Mark, Sophia, John 
}

// while loop
var i = 0;
while (i < names.length) {
    console.log(names[i]); // outputs: John, Sophia, Mark, Kristina, Paul
    i++;
}
