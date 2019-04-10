/*

Javascript codes are executed using following process:

Step 1: JavaScript source code is taken by the browser and sent to JavaScript Engine(e.g. V8) 
Step 2: JavaScript Engine's 'Parser' read all the codes line by line and creates a data structure called 'Abstract Syntax Tree'
Step 3: The codes are hen translated to machine code(binary code)
Step 4: After that the binary code(combinations of 1's and 0's) are executed by the processor and works on the browser

N.B. The 'Parser' knows all the javaScript syntax & rules. Thus it can distinguish if a the source code contains valid or incorrect syntax. 

The execution order will be from bottom to top:

	a. From 3rd function: Hey john

	b. From 2rd function: Hi john

	c. From 1st function: Hello john

*/

var name = 'john';

function first() {
    var a = 'Hello ';
    second();
    var x = a + name;
    console.log("From 1st function: " + x)
}

function second() {
    var b = 'Hi ';
    third();
    var z = b + name;
    console.log("From 2rd function: " + z)
}

function third() {
    var c = 'Hey ';
    var z = c + name;
    console.log("From 3rd function: " + z)
}

first();
