/*

1. smith.__proto__===Teacher.prototype // returns true 
because the prototype property of smith is the prototype property of Teacher function constructor

2. smith.hasOwnProperty("age") // returns true
becuase hasOwnProperty looks for a object's own property and here 'age' is the objects own property

3. smith.hasOwnProperty("retirementAge") // returns false
because 'retirementAge' is not 'smith' object's own property rather it's an inherited property

4. smith instanceof Teacher // returns true
because we created 'smith' through the 'Teacher' function constructor

*/
